using FluentValidation;
using ProductApi.DTO;
using ProductApi.Services;

namespace ProductApi.Validators
{
    public class ProductValidator : AbstractValidator<ProductDto>
    {
        private readonly IProductService _productService;

        public ProductValidator(IProductService productService)
        {
            _productService = productService;

            RuleFor(x => x.Name)
                .NotEmpty().WithMessage("Name is required.")
                .Must(name => !_productService.GetAllProducts().Any(p => p.Name == name))
                .WithMessage("A product with the same name already exists.")
                .MinimumLength(3).WithMessage("Name must be at least 3 characters");

            RuleFor(x => x.Price)
                .GreaterThan(0).WithMessage("Price must be greater than zero.");
        }
    }
}
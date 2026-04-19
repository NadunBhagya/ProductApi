using ProductApi.Models;
using ProductApi.Repositories;
using Microsoft.Extensions.Logging;

namespace ProductApi.Services
{
    public class ProductService : IProductService
    {
        private readonly IProductRepository _repo;
        private readonly ILogger<ProductService> _logger;

        public ProductService(IProductRepository repo, ILogger<ProductService> logger)
        {
            _repo = repo;
            _logger = logger;
        }

        public List<Product> GetAllProducts()
        {
           try
            {
                _logger.LogInformation("Fetching all products");

                return _repo.GetAll();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while fetching products");
                throw;
            }
        }

        public Product CreateProduct(string name, decimal price)
        {
            try
            {
                _logger.LogInformation("Creating product: {Name}", name);

                var product = new Product
                {
                    Name = name,
                    Price = price
                };

                return _repo.Add(product);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error while creating product");
                throw;
            }
        }

        public void DeleteProduct(int id)
        {
            try
            {
                _logger.LogInformation("Deleting product with ID: {Id}", id);
                _repo.Delete(id);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error while deleting product with ID: {Id}", id);
                throw;
            }
        }


     
    }
}

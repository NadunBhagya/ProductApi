using Microsoft.AspNetCore.Mvc;
using ProductApi.DTO;
using ProductApi.Services;
using Microsoft.AspNetCore.Authorization;

namespace ProductApi.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly IProductService _service;

        public ProductController(IProductService service)
        {
            _service = service;
        }

        [HttpGet]
        public IActionResult GetProducts()
        {
            return Ok(_service.GetAllProducts());
        }

        [HttpPost]
        public IActionResult Create(ProductDto dto)
        {
            var product = _service.CreateProduct(dto.Name, dto.Price);
            return Ok(product);
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteProduct(int id)
        {
            _service.DeleteProduct(id);
            return Ok();
        }
        
    }
}

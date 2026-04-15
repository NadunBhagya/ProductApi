using ProductApi.Models;
using ProductApi.Repositories;

namespace ProductApi.Services
{
    public class ProductService : IProductService
    {
        private readonly IProductRepository _repo;

        public ProductService(IProductRepository repo)
        {
            _repo = repo;
        }

        public List<Product> GetAllProducts()
        {
            return _repo.GetAll();
        }

        public Product CreateProduct(string name, decimal price)
        {
            var product = new Product
            {
                Name = name,
                Price = price
            };

            return _repo.Add(product);
        }

        public void DeleteProduct(int id)
        {
            _repo.Delete(id);
        }
    }
}

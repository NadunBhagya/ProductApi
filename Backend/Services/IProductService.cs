using ProductApi.Models;

namespace ProductApi.Services
{
    public interface IProductService
    {
        List<Product> GetAllProducts();
        Product CreateProduct(string name, decimal price);
        void DeleteProduct(int id);
    }
}
 
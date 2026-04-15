using ProductApi.Models;

namespace ProductApi.Repositories
{
    public interface IProductRepository
    {
        List<Product> GetAll();
        Product Add(Product product);
        void Delete(int id);
    }
}
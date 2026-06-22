import java.util.Arrays;
import java.util.Comparator;

class Product {
    int productId;
    String productName;
    String category;

    // Constructor
    Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    // Display product details
    void display() {
        System.out.println("Product ID: " + productId);
        System.out.println("Product Name: " + productName);
        System.out.println("Category: " + category);
        System.out.println();
    }
}

public class EcommerceSearch {

    // Linear Search
    static Product linearSearch(Product[] products, int key) {
        for (Product product : products) {
            if (product.productId == key) {
                return product;
            }
        }
        return null;
    }

    // Binary Search
    static Product binarySearch(Product[] products, int key) {
        int low = 0;
        int high = products.length - 1;

        while (low <= high) {
            int mid = low + (high - low) / 2;

            if (products[mid].productId == key) {
                return products[mid];
            } else if (products[mid].productId < key) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return null;
    }

    public static void main(String[] args) {

        // Array of Products
        Product[] products = {
                new Product(105, "Laptop", "Electronics"),
                new Product(102, "Shoes", "Fashion"),
                new Product(108, "Mobile", "Electronics"),
                new Product(101, "Book", "Education"),
                new Product(110, "Watch", "Accessories")
        };

        int searchId = 108;

        // Linear Search
        System.out.println("=== Linear Search ===");
        Product result1 = linearSearch(products, searchId);

        if (result1 != null) {
            System.out.println("Product Found:");
            result1.display();
        } else {
            System.out.println("Product Not Found");
        }

        // Sort array for Binary Search
        Arrays.sort(products, Comparator.comparingInt(p -> p.productId));

        // Binary Search
        System.out.println("=== Binary Search ===");
        Product result2 = binarySearch(products, searchId);

        if (result2 != null) {
            System.out.println("Product Found:");
            result2.display();
        } else {
            System.out.println("Product Not Found");
        }
    }
}
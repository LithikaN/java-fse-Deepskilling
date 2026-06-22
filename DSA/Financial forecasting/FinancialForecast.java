import java.util.Scanner;

public class FinancialForecast {

    public static double predictFutureValue(double currentValue,
                                            double growthRate,
                                            int years) {

        if (years == 0) {
            return currentValue;
        }

        return predictFutureValue(currentValue * (1 + growthRate),
                                  growthRate,
                                  years - 1);
    }

    public static void main(String[] args) {

        try (Scanner sc = new Scanner(System.in)) {
            System.out.print("Enter Current Value: ");
            double currentValue = sc.nextDouble();
            
            System.out.print("Enter Annual Growth Rate (%): ");
            double growthPercent = sc.nextDouble();
            
            System.out.print("Enter Number of Years: ");
            int years = sc.nextInt();
            
            double growthRate = growthPercent / 100;
            
            double futureValue = predictFutureValue(currentValue,
                    growthRate,
                    years);
            
            System.out.printf(
                    "Predicted Future Value after %d years = %.2f",
                    years, futureValue);
        }
    }
}
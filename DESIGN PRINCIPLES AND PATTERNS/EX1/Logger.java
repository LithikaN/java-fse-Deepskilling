public class Logger {

    // Step 1: Create a private static instance
    private static Logger instance;

    // Step 2: Make constructor private
    private Logger() {
        System.out.println("Logger Instance Created");
    }

    // Step 3: Public method to provide access to the instance
    public static Logger getInstance() {

        // Create object only if it does not already exist
        if (instance == null) {
            instance = new Logger();
        }

        return instance;
    }

    // Logging method
    public void log(String message) {
        System.out.println("Log: " + message);
    }
}
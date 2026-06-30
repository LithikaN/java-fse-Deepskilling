package com.example;

import static org.mockito.Mockito.*;

import org.junit.Test;

public class VerifyInteractionTest {

    @Test
    public void testVerifyInteraction() {

        // Step 1: Create mock object
        ExternalApi mockApi = mock(ExternalApi.class);

        // Step 2: Pass mock object to service
        MyService service = new MyService(mockApi);

        // Step 3: Call the method
        service.fetchData();

        // Step 4: Verify interaction
        verify(mockApi).getData();
    }
}
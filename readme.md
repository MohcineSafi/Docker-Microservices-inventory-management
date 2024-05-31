# Stock Management Microservices

This repository contains a stock management application structured as microservices. Each microservice is responsible for a specific aspect of the application and is containerized using Docker. The services are orchestrated using Docker Compose.

## Services

1. **Authentication Service**

   - Manages user authentication and account management.
   - Provides functionalities for user registration, login, and password recovery.

2. **Product Management Service**

   - Manages the creation, update, and deletion of products.
   - Stores information about products such as name, description, price, and stock quantity.

3. **Order Management Service**

   - Manages customer orders.
   - Allows for creating new orders, updating, and canceling them.
   - Handles order details like ordered products, quantities, and shipping addresses.

4. **Stock Management Service**
   - Manages stock levels for each product.
   - Updates product quantities when an order is placed or when new stock is added.
   - Provides functionalities to track and manage stock entries and exits.

## Getting Started

### Prerequisites

- Docker: [Install Docker](https://docs.docker.com/get-docker/)
- Docker Compose: [Install Docker Compose](https://docs.docker.com/compose/install/)

### Running the Services

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/stock-management-microservices.git
   cd stock-management-microservices
   ```

2. Build and start the services using Docker Compose:

   ```sh
   docker-compose up --build
   ```

3. Access the services at the following URLs:
   - Auth Service: http://localhost:8000
   - Product Service: http://localhost:8001
   - Order Service: http://localhost:8002
   - Stock Service: http://localhost:8003

### Stopping the Services

To stop the running services, use:

```sh
docker-compose down
```

## API Endpoints

### Auth Service

- `POST /login`: User login
- `POST /register`: User registration

### Product Service

- `POST /products`: Create a new product
- `GET /products`: Get a list of products

### Order Service

- `POST /orders`: Create a new order
- `GET /orders`: Get a list of orders

### Stock Service

- `POST /stock`: Update stock
- `GET /stock`: Get stock levels

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

Happy coding!

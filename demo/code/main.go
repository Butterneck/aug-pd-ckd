package main

import (
	"errors"
	"fmt"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
)

func main() {
	lambda.Start(Handler)
}
func Handler(req events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	fmt.Println("%s", req.Path)
	if req.Path == "/fail" {
		panic(errors.New("Something went terribly wrong"))
	}
	return events.APIGatewayProxyResponse{Body: "Hello, World!", StatusCode: 200}, nil
}

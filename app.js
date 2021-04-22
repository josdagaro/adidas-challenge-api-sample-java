exports.handler = async (event, context) => {
  console.log(event)
  console.log(context)
  const response = {
      statusCode: 200,
      body: JSON.stringify('Hello Adidas!'),
  };
  return response;
};

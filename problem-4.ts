{
    type Circle = {
        shape: "circle";
        radius: number;
      };
    
      type Rectangle = {
        shape: "rectangle";
        width: number;
        height: number;
      };
    
      type Shape = Circle | Rectangle;
    
      function calculateShapeArea(param: Shape) {
        if (param.shape === "circle") {
          return parseFloat((Math.PI * param.radius ** 2).toFixed(2));
        } else if (param.shape === "rectangle") {
          return param.width * param.height;
        }
      }

      const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
      const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
      });
      console.log(circleArea, rectangleArea)


}
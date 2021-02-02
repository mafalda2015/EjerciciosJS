class square {
    constructor(side) {
      this.perimeter = side + side + side + side;
      this.area = side * side;
      console.log('Este cuadrado tiene ${side} cm de lado, su perimetro es ${this.perimeter} cm y su area es ${this.area} cm2');
    }
  };
  
  const small = new square(2);
  const medium = new square(5);
  const big = new square(10);
public interface Coffee {
  public double getCost();
  public String getIngredients();
}

public class SimpleCoffee implements Coffee {
  @Override
  public double getCost() {
    return 1;
  }

  @Override
  public String getIngredients() {
    return "Coffee";
  }
}

public abstract class CoffeeDecorator implements Coffee {
  private final Coffee decoratedCoffee;

  public CoffeeDecorator(Coffee c) {
    this.decoratedCoffee = c;
  }

  @Override
  public double getCost() {
    return decoratedCoffee.getCost();
  }

  @Override
  public String getIngredients() {
    return decoratedCoffee.getIngredients();
  }

}

class WithMilk extends CoffeeDecorator {
  public WithMilk(Coffee c) {
    super(c);
  }

  @Override
  public double getCost() {
    return super.getCost() + 0.5;
  }

  @Override
  public String getIngredients() {
    return super.getIngredients() + ", Milk";
  }
}

class WithCream extends CoffeeDecorator {
  public WithCream(Coffee c) {
    super(c);
  }

  @Override
  public double getCost() {
    return super.getCost() + 0.2;
  }

  @Override
  public String getIngredients() {
    return super.getIngredients() + ", Cream";
  }
}

class WithMocha extends CoffeeDecorator {
  public WithMocha(Coffee c) {
    super(c);
  }

  @Override
  public double getCost() {
    return super.getCost() + 0.5;
  }

  @Override
  public String getIngredients() {
    return super.getIngredients() + ", Mocha";
  }
}

class WithHazelnut extends CoffeeDecorator {
  public WithHazelnut(Coffee c) {
    super(c);
  }

  @Override
  public double getCost() {
    return super.getCost() + 0.7;
  }

  @Override
  public String getIngredients() {
    return super.getIngredients() + ", Hazelnut";
  }
}

new WithHazelnut(
  new WithCream(
    new WithMoca(
      new WithMilk(
        new SimpleCoffee()
      )
    )
  )
).getCost(); //2.9

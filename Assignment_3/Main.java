package com.rightstroke.java;
import java.util.*;
public class Main {
	public static void main(String a[]) {
		Scanner scan = new Scanner (System.in);
		Shape shape = new Circle();
		Shape shape1 = new Square();
		Shape shape2 = new Triangle();
		shape.createShape();
		System.out.println("Area of a Circle is : "+shape.createArea(scan.nextDouble()));
		shape1.createShape();
		System.out.println("Area of a Square is : "+shape1.createArea(scan.nextDouble()));
		shape2.createShape();
		System.out.println("Area of a Triangle is : "+shape2.createArea(scan.nextDouble()));
		scan.close();
	}
}
interface Shape{
	abstract void createShape();
	abstract double createArea(double a);
}
class Square implements Shape{
	@Override
	public void createShape() {
		System.out.println("Square is created");
	}
	@Override
	public double createArea(double a) {
		double Area = (a*a);
		return Area;
	}
}
class Circle implements Shape{
	private static final double Pi = 3.14;
	@Override
	public void createShape() {
		System.out.println("Circle is created");
	}
	@Override
	public double createArea(double a) {
		double Area = Pi*(a*a);
		return Area;
	}
	
	
}
class Triangle implements Shape{
	@Override
	public void createShape() {
		System.out.println("Triangle is created");
	}
	@Override
	public double createArea(double a) {
		double height = a;
		double base = height+4;
		double Area = (base*height)/2;
		return Area;
	}
	
}

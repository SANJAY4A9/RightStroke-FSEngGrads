package assignment_2;

public class JavaStaticMethod
{
	public static void area(float r)
	{
	   System.out.println("Area of a circle :"+(3.14f*r*r));
	}
	
	public static void main(String a[])
	{
		JavaStaticMethod.area(10.0f);
	}
}

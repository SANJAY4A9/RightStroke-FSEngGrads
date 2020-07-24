package assignment_2;
import java.util.*;
public class Matrix_Addition
{
	public static void main(String args[])
	{
		Scanner in = new Scanner(System.in);
		
		System.out.println("Enter the number of Rows in the Matrix:");
		int r  = in.nextInt();
		
		System.out.println("Enter the number of Coloumns in the matrix:");
		int c = in.nextInt();
		
		int arr1[][] = new int[r][c];
		int arr2[][] = new int[r][c];
		int sum[][]  = new int[r][c];
		
		System.out.println("Enter the elements in 1st array:");
		for(int i=0; i<r; i++)
		{
			for(int j =0; j<c; j++)
				arr1[i][j] = in.nextInt();
		}
		
		System.out.println("Enter the elements in 2nd array:");
		for(int i=0; i<r; i++)
		{
			for(int j =0; j<c; j++)
				arr2[i][j] = in.nextInt();
		}
		for(int i=0; i<r; i++)
		{
			for(int j =0; j<c; j++)
				sum[i][j] = arr1[i][j] + arr2[i][j];
		}
		
		System.out.println("Matrix formed after matrix addition is:");

		for(int i=0; i<r; i++)
		{
			 for(int j=0;j<c;j++)
			 {
				 System.out.print(sum[i][j]+"  ");
			 }
			 System.out.println();
		}
		 in.close();
		
	}
}

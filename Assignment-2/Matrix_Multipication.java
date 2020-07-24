package assignment_2;

import java.util.Scanner;

public class Matrix_Multipication
{
	public static void main(String args[])
	{
		 Scanner sc = new Scanner(System.in);
		 
		 System.out.print("Enter the rows : ");
		 int rows = sc.nextInt();
		 
		 System.out.print("Enter the cols : ");
		 int cols = sc.nextInt();
		 
		 int[][] arr1 = new int[rows][cols];
		 int[][] arr2 = new int[rows][cols];
		 int[][] mul  = new int[rows][cols];
		 
		 System.out.println("Enter the first array elements : ");
		 for(int i=0;i<rows;i++) 
		 {
			 for(int j=0;j<cols;j++) 
				 arr1[i][j]=sc.nextInt();
		 }
		 
		 System.out.println("Enter the second array elements : ");
		 for(int i=0;i<rows;i++) 
		 {
			 for(int j=0;j<cols;j++) 
				 arr2[i][j]=sc.nextInt();
		 }
		 
		 for(int i=0;i<rows;i++) 
		 {
			 for(int j=0;j<cols;j++) 
			 {
				 int s=0;
				 for(int k=0;k<cols;k++) 
					 s+=arr1[i][k]*arr2[k][j];
				 mul[i][j]=s;
			 }
		 }
		 
		 System.out.println("The  multiplication of the two matrix elements : ");
		 for(int i=0;i<rows;i++) 
		 {
			 for(int j=0;j<cols;j++) 
				 System.out.print(mul[i][j]+"  ");
			 System.out.println();
		 }
		 sc.close();
		 
		 
	 }
	}
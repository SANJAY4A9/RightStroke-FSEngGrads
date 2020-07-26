class ExceptionHandling {
	public static void main(String a[]) {
		int CharacterCount = 0;
		for (int i = 0; i < a.length; i++)  
		{
			try 
			{
				int number = Integer.parseInt(a[i]);
				}
			catch (NumberFormatException e)
			{
				CharacterCount++;
			}
		}
		System.out.println ("Character Count : " + CharacterCount);
		System.out.println ("Integer Count: " +(a.length-CharacterCount));
	}

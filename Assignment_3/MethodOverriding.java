package com.rightstroke.java;

public class MethodOverriding {
	public static void main(String a[]) {
		Remote remote = new Television();
		remote.powerOn();
		remote.volumeUp();
		remote.volumeDown();
		remote.powerOff();
	}
}
interface Remote{
	abstract public void powerOn();
	abstract public void volumeUp();
	abstract public void volumeDown();
	abstract public void powerOff();
}
class Television implements Remote{
	@Override
	public void powerOn() {
		System.out.println("Power On");
	}
	@Override
	public void volumeUp() {
		System.out.println("Volume Up");
	}
	@Override
	public void volumeDown() {
		System.out.println("Volume Down");
	}
	@Override
	public void powerOff() {
		System.out.println("Power Off");
	}
}

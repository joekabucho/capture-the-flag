#pragma strict

private var capController : CaptureController;

function Start()
{
	capController = GameObject.Find("First Person Controller").GetComponent(CaptureController);
}

function OnTriggerEnter(Col : Collider)
{
	if(Col.tag == "BlueTeam")
	{
		capController.blueTeam = true;
	}
	
	if(Col.tag == "RedTeam")
	{
		capController.redTeam = true;
	}
}

function OnTriggerExit(Col : Collider)
{
	if(Col.tag == "BlueTeam")
	{
		capController.blueTeam = false;
	}
	
	if(Col.tag == "RedTeam")
	{
		capController.redTeam = false;
	}
}
#pragma strict

var blueTeam : boolean = false;
var redTeam : boolean = false;

private var redcapturePerc : float = 0;
private var bluecapturePerc : float = 0;

//FLAGS
var flagRed : GameObject;
var flagBlue : GameObject;
var flagNeutral : GameObject;

//Particles
var mistRed : GameObject;
var mistBlue : GameObject;
var mistNeutral : GameObject;

function Start()
{
	flagRed.GetComponent(MeshRenderer).enabled = false;
	flagBlue.GetComponent(MeshRenderer).enabled = false;
	flagNeutral.GetComponent(MeshRenderer).enabled = true;
	
	mistRed.GetComponent(Renderer).enabled = false;
	mistBlue.GetComponent(Renderer).enabled = false;
	mistNeutral.GetComponent(Renderer).enabled = true;
}

function Update()
{
	if(blueTeam == true)
	{
		bluecapturePerc += Time.deltaTime * 20;
		redcapturePerc -= Time.deltaTime * 20;
	}
	
	if(redTeam == true)
	{
		redcapturePerc += Time.deltaTime * 20;
		bluecapturePerc -= Time.deltaTime * 20;
	}
	
	if(redTeam == true && blueTeam == true)
	{
		redcapturePerc = redcapturePerc;
		bluecapturePerc = bluecapturePerc;
	}
	
	if(redcapturePerc >= 100)
	{
		redcapturePerc = 100;
		flagRed.GetComponent(MeshRenderer).enabled = true;
		flagBlue.GetComponent(MeshRenderer).enabled = false;
		flagNeutral.GetComponent(MeshRenderer).enabled = false;
		
		mistRed.GetComponent(Renderer).enabled = true;
		mistBlue.GetComponent(Renderer).enabled = false;
		mistNeutral.GetComponent(Renderer).enabled = false;
	}
	
	if(bluecapturePerc >= 100)
	{
		bluecapturePerc = 100;
		flagRed.GetComponent(MeshRenderer).enabled = false;
		flagBlue.GetComponent(MeshRenderer).enabled = true;
		flagNeutral.GetComponent(MeshRenderer).enabled = false;
		
		mistRed.GetComponent(Renderer).enabled = false;
		mistBlue.GetComponent(Renderer).enabled = true;
		mistNeutral.GetComponent(Renderer).enabled = false;
	}
	
	if(redcapturePerc <= 50 && bluecapturePerc <= 51)
	{
		flagRed.GetComponent(MeshRenderer).enabled = false;
		flagBlue.GetComponent(MeshRenderer).enabled = false;
		flagNeutral.GetComponent(MeshRenderer).enabled = true;
		
		mistRed.GetComponent(Renderer).enabled = false;
		mistBlue.GetComponent(Renderer).enabled = false;
		mistNeutral.GetComponent(Renderer).enabled = true;
	}
	
	if(redcapturePerc <= 0)
	{
		redcapturePerc = 0;
	}
	
	if(bluecapturePerc <= 0)
	{
		bluecapturePerc = 0;
	}
}

function OnGUI()
{
	GUI.Box(Rect(10, 10, 300, 25),"Red Cap" + " " + redcapturePerc.ToString("0") + " " + "Blue Cap" + " " + bluecapturePerc.ToString("0"));
}
//This demos creating dialog boxes.  You can add
//any type of control to a dialog box.  Here we
//just adding a list control.

//Called when application is started.
function OnStart()
{
	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "linear", "VCenter,FillXY" );	

	//Create a button to launch the dialog.
	btn = app.CreateButton( "Show Dialog Box", 0.6, 0.1 );
	btn.SetOnTouch( btn_OnTouch );
	lay.AddChild( btn );
	
	//Add layout to app.	
	app.AddLayout( lay );
}

//Called when user touches our button.
function btn_OnTouch()
{
    //Create dialog window.
    dlgTxt = app.CreateDialog( "Choose a Fruit" );
    
    //Create a layout for dialog.
    layDlg = app.CreateLayout( "linear", "vertical,fillxy,left" );
    layDlg.SetPadding( 0.02, 0, 0.02, 0.02 );
    dlgTxt.AddLayout( layDlg );

    //Create a list control.
    var list = "Apples,Oranges,Bananas,Cheese,Milk,Eggs,Flour";
    lstDlg = app.CreateList( list, 0.8, 0.3 );
    lstDlg.SetTextSize( 22 );
    lstDlg.SetTextColor( "#dddddd" );
    lstDlg.SetOnTouch( lst_OnTouch );
    layDlg.AddChild( lstDlg );
    
    //Show dialog.
    dlgTxt.Show();
}

//Handle list item selection.
function lst_OnTouch( item )
{
    //Hide the dialog window.
    dlgTxt.Hide();
    
    //Show which fruit the user chose.
    app.ShowPopup( "You chose " + item, "Short" );
}

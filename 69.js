
(function(){var all=document.getElementsByTagName('*');for(var i=0;i<all.length;i++)if(typeof all[i].id!='undefined'&&typeof window[all[i].id]=='undefined')window[all[i].id]=all[i];})()
browserWarningMessage('Please use Google Chrome, Apple Safari or another supported browser.');
if (navigator.userAgent.indexOf('iPad') !== -1) {
  var splashscreen = document.createElement('link');
  splashscreen.rel = 'apple-touch-startup-image';
  splashscreen.href = '196.png';
  document.getElementsByTagName('head')[0].appendChild(splashscreen);
}

window.addEventListener('load', function() {
  frmMainMenu.style.display = 'block';
  NSB.List_jqm_init('lstMainMenu','',true,'100%',false);
  lstMainMenu_ref = new iScroll('lstMainMenu_scroller',{ bounce:true, zoom:false });
  lstMainMenu.refresh=function(){if (typeof lstMainMenu_ref!='undefined') setTimeout(NSB.refresh,100,lstMainMenu_ref)};
  NSB.addProperties(lstMainMenu, lstMainMenu_scroller);

(function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('lstMainMenu_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
  NSB.addProperties(mmHeader);
  NSB.addDisableProperty(mmHeader);


  if(typeof(mmHeader.onclick)=='function'){
    if(typeof(mmHeader_left)!='undefined') mmHeader_left.onclick=function() {mmHeader.onclick(mmHeader_left.getAttribute('nsbvalue'))};
    if(typeof(mmHeader_right)!='undefined') mmHeader_right.onclick=function() {mmHeader.onclick(mmHeader_right.getAttribute('nsbvalue'))}};
  frmMainMenu.style.display = 'none';
}, false);
frmMainMenu.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(frmMainMenu);

frmMainMenu.onshow = function() { savethefunction_rvar="";
  ResizeHeaderList(frmMainMenu,mmHeader,lstMainMenu);
  InitializeList(lstMainMenu,"Dashboards,Analysis,Settings,Back Up,Restore,Sign Out" ,"," ,True);
return savethefunction_rvar; }

mmHeader.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "About"):
    ChangeForm(frmAbout);
  }
return savethefunction_rvar; }

function ContinueBackUp(result) {
  if(result != 6 )  { return; }
 var  delRec;
 delRec = new Object();
  NSB.ShowProgress("Working on it...");
  dbExport = SQLExport(dbObj, dbName, backupComplete);
 //dbExport = SQLExportSpecific(dbObj, dbName, "Projects,Workstream,Portfolio", False, backupComplete)
}

lstMainMenu.onclick = function(i) { savethefunction_rvar="";
  if(TypeName(i) == "object" )  { return savethefunction_rvar; }
 var  strItem;
  strItem = lstMainMenu.getItem(i);
  switch (True) {
  case ((strItem) == "Dashboards"):
    ChangeForm(frmDashboardSelector);
	break;
  case ((strItem) == "Back Up"):
    NSB.MsgBox(ContinueBackUp,"This will backup your database and email it to your email address. Please ensure you are connected to the internet." , 4+32, "Confirm Backup");
	break;
  case ((strItem) == "Restore"):
    ChangeForm(frmRestore);
	break;
  case ((strItem) == "Sign Out"):
    ChangeForm(frmSignIn);
	break;
  case ((strItem) == "Analysis"):
    ChangeForm(frmAnalysis);
	break;
  case ((strItem) == "Settings"):
    ChangeForm(frmSettings);
  }
return savethefunction_rvar; }

function backupComplete() { savethefunction_rvar="";
 var  sEmailAddress;
  sEmailAddress = localStorage.getItem("email");
  sEmailAddress = Replace(sEmailAddress,'\n',"");
  sEmailAddress = Replace(sEmailAddress, '\r',"");
  sEmailAddress = Replace(sEmailAddress, '\n',"");
  if(Len(sEmailAddress) == 0) {
    NSB.MsgBox("Your email address has not been configured, please contact the System Administrator!");
     return;
  }
  dbJSON=JSON.stringify(dbExport);
  NSB.ShowProgress(False);
  localStorage.setItem("backup" , dbJSON);
  email(sEmailAddress,"Project.Show "  +  dbName  +  " BackUp "  +  dateadd("s",0,new Date()),dbJSON);
return savethefunction_rvar; }

window.addEventListener('load', function() {
  frmSettings.style.display = 'block';
  NSB.addProperties(settingsHeader);
  NSB.addDisableProperty(settingsHeader);


  if(typeof(settingsHeader.onclick)=='function'){
    if(typeof(settingsHeader_left)!='undefined') settingsHeader_left.onclick=function() {settingsHeader.onclick(settingsHeader_left.getAttribute('nsbvalue'))};
    if(typeof(settingsHeader_right)!='undefined') settingsHeader_right.onclick=function() {settingsHeader.onclick(settingsHeader_right.getAttribute('nsbvalue'))}};
  NSB.List_jqm_init('settingsList','',true,'100%',false);
  settingsList_ref = new iScroll('settingsList_scroller',{ bounce:true, zoom:false });
  settingsList.refresh=function(){if (typeof settingsList_ref!='undefined') setTimeout(NSB.refresh,100,settingsList_ref)};
  NSB.addProperties(settingsList, settingsList_scroller);

(function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('settingsList_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
  frmSettings.style.display = 'none';
}, false);
frmSettings.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(frmSettings);

frmSettings.onshow = function() { savethefunction_rvar="";
  ResizeHeaderList(frmSettings,settingsHeader,settingsList);
  InitializeList(settingsList,"Project Status,Materials,Timesheet Status,Components" , "," , True);
  InitializeList(settingsList,"Infrastructure Types,Project Stages,Approval Status" , "," , False);
  InitializeList(settingsList,"Decision Types,Document Status,Document Type,Risk/Issue/Change Category" , "," , False);
  InitializeList(settingsList,"Expense Types,Month Names,Calendar Legends,Project Category" , "," , False);
  InitializeList(settingsList,"Risk/Issue/Change Priority,Risk/Issue/Change Impact,Risk/Issue/Change Propability,Risk/Issue/Change Status,Holidays" , "," , False);
return savethefunction_rvar; }


settingsHeader.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Help"):
 //ChangeForm(frmAbout)
	break;
  case ((choice) == "Home"):
    ChangeForm(frmMainMenu);
  }
return savethefunction_rvar; }

settingsList.onclick = function(i) { savethefunction_rvar="";
  if(TypeName(i) == "object" )  { return savethefunction_rvar; }
 var  strItem;
  strItem = settingsList.getItem(i);
  localStorage.setItem("primarykey" , "ID");
  localStorage.setItem("fields" ,"Description");
  localStorage.setItem("fldtot" , 1);
  localStorage.setItem("headers" ,"Description,Edit,Clone,Delete");
  localStorage.setItem("fieldsH" ,"Description");
  switch (True) {
  case ((strItem) == "Project Status"):
    localStorage.setItem("table" ,"Project_Status");
    ChangeForm(frmSettingsGrid);
	break;
  case ((strItem) == "Materials"):
    localStorage.setItem("table" ,"Materials");
    ChangeForm(frmSettingsGrid);
	break;
  case ((strItem) == "Timesheet Status"):
    localStorage.setItem("table" ,"Timesheet_Status");
    ChangeForm(frmSettingsGrid);
	break;
  case ((strItem) == "Components"):
    localStorage.setItem("table" ,"Component");
    ChangeForm(frmSettingsGrid);
	break;
  case ((strItem) == "Infrastructure Types"):
    localStorage.setItem("table" ,"Infrastructure_Type");
    localStorage.setItem("primarykey" , "Id");
    localStorage.setItem("fields" ,"TypeName");
    localStorage.setItem("fldtot" , 1);
    localStorage.setItem("fieldsH" ,"Type Name");
  ChangeForm(frmSettingsGrid);
	break;
  case ((strItem) == "Project Stages"):
    localStorage.setItem("table" ,"Project_Stage");
    localStorage.setItem("primarykey" , "ID");
    localStorage.setItem("fields" ,"Description");
    localStorage.setItem("fldtot" , 1);
    ChangeForm(frmSettingsGrid);
	break;
  case ((strItem) == "Approval Status"):
    localStorage.setItem("table" ,"Approval_Status");
    localStorage.setItem("primarykey" , "ID");
    localStorage.setItem("fields" ,"Description");
    localStorage.setItem("fldtot" , 1);
    ChangeForm(frmSettingsGrid);
	break;
  case ((strItem) == "Decision Types"):
    localStorage.setItem("table" ,"Decision_Type");
    localStorage.setItem("primarykey" , "ID");
    localStorage.setItem("fields" ,"Description");
    localStorage.setItem("fldtot" , 1);
    ChangeForm(frmSettingsGrid);
	break;
  case ((strItem) == "Document Status"):
    localStorage.setItem("table" ,"Document_Status");
    localStorage.setItem("primarykey" , "ID");
    localStorage.setItem("fields" ,"Description");
    localStorage.setItem("fldtot" , 1);
    ChangeForm(frmSettingsGrid);
	break;
  case ((strItem) == "Document Type"):
    localStorage.setItem("table" ,"Document_Type");
    localStorage.setItem("primarykey" , "ID");
    localStorage.setItem("fields" ,"Description");
    localStorage.setItem("fldtot" , 1);
    ChangeForm(frmSettingsGrid);
	break;
  case ((strItem) == "Risk/Issue/Change Category"):
    localStorage.setItem("table" ,"RIC_Category");
    localStorage.setItem("primarykey" , "ID");
    localStorage.setItem("fields" ,"Description");
    localStorage.setItem("fldtot" , 1);
    ChangeForm(frmSettingsGrid);
	break;
  case ((strItem) == "Expense Types"):
    localStorage.setItem("table" ,"Expense_Types");
    localStorage.setItem("primarykey" , "ID");
    localStorage.setItem("fields" ,"Description");
    localStorage.setItem("fldtot" , 1);
    ChangeForm(frmSettingsGrid);
	break;
  case ((strItem) == "Month Names"):
    localStorage.setItem("table" ,"Month_Names");
    localStorage.setItem("primarykey" , "Id");
    localStorage.setItem("fields" ,"Description,AliasName");
    localStorage.setItem("headers" ,"Description,Alias Name,Edit,Clone,Delete");
    localStorage.setItem("fieldsH" ,"Description,Alias Name");
    localStorage.setItem("fldtot" , 2);
    ChangeForm(frmSettingsGrid);
	break;
  case ((strItem) == "Calendar Legends"):
    localStorage.setItem("table" ,"Calendar_Legends");
    localStorage.setItem("primarykey" , "Id");
    localStorage.setItem("fields" ,"Description,LegendColor");
    localStorage.setItem("headers" ,"Description,Legend Color,Edit,Clone,Delete");
    localStorage.setItem("fieldsH" ,"Description,Legend Color");
    localStorage.setItem("fldtot" , 2);
    ChangeForm(frmSettingsGrid);
	break;
  case ((strItem) == "Project Category"):
    localStorage.setItem("table" ,"Project_Category");
    localStorage.setItem("primarykey" , "ID");
    localStorage.setItem("fields" ,"Description,AliasName,Color,AliasNameColor,ColorIndex");
    localStorage.setItem("headers" ,"Description,Alias Name,Color,Alias Color,Color Index,Edit,Clone,Delete");
    localStorage.setItem("fieldsH" ,"Description,Alias Name,Color,Alias Color,Color Index");
    localStorage.setItem("fldtot" , 5);
    ChangeForm(frmSettingsGrid);
	break;
  case ((strItem) == "Risk/Issue/Change Priority"):
    localStorage.setItem("table" ,"RIC_Priority");
    localStorage.setItem("primarykey" , "ID");
    localStorage.setItem("fields" ,"Description,RAG");
    localStorage.setItem("headers" ,"Description,RAG,Edit,Clone,Delete");
    localStorage.setItem("fieldsH" ,"Description,RAG");
    localStorage.setItem("fldtot" , 2);
    ChangeForm(frmSettingsGrid);
	break;
  case ((strItem) == "Risk/Issue/Change Impact"):
    localStorage.setItem("table" ,"RIC_Impact");
    localStorage.setItem("primarykey" , "ID");
    localStorage.setItem("fields" ,"Description,RAG");
    localStorage.setItem("headers" ,"Description,RAG,Edit,Clone,Delete");
    localStorage.setItem("fieldsH" ,"Description,RAG");
    localStorage.setItem("fldtot" , 2);
    ChangeForm(frmSettingsGrid);
	break;
  case ((strItem) == "Risk/Issue/Change Propability"):
    localStorage.setItem("table" ,"RIC_Probability");
    localStorage.setItem("primarykey" , "ID");
    localStorage.setItem("fields" ,"Description,RAG");
    localStorage.setItem("headers" ,"Description,RAG,Edit,Clone,Delete");
    localStorage.setItem("fieldsH" ,"Description,RAG");
    localStorage.setItem("fldtot" , 2);
    ChangeForm(frmSettingsGrid);
	break;
  case ((strItem) == "Risk/Issue/Change Status"):
    localStorage.setItem("table" ,"RIC_Status");
    localStorage.setItem("primarykey" , "ID");
    localStorage.setItem("fields" ,"Description,RAG");
    localStorage.setItem("headers" ,"Description,RAG,Edit,Clone,Delete");
    localStorage.setItem("fieldsH" ,"Description,RAG");
    localStorage.setItem("fldtot" , 2);
    ChangeForm(frmSettingsGrid);
	break;
  case ((strItem) == "Holidays"):
    localStorage.setItem("table" ,"Holidays");
    localStorage.setItem("primarykey" , "ID");
    localStorage.setItem("fields" ,"HolidayID,HolidayName");
    localStorage.setItem("headers" ,"Date,Holiday Name,Edit,Clone,Delete");
    localStorage.setItem("fieldsH" ,"Date,Holiday Name");
    localStorage.setItem("fldtot" , 2);
    ChangeForm(frmSettingsGrid);

  }
return savethefunction_rvar; }


window.addEventListener('load', function() {
  frmSettingsGrid.style.display = 'block';
  NSB.addProperties(setgridTitle);
  NSB.addDisableProperty(setgridTitle);


  if(typeof(setgridTitle.onclick)=='function'){
    if(typeof(setgridTitle_left)!='undefined') setgridTitle_left.onclick=function() {setgridTitle.onclick(setgridTitle_left.getAttribute('nsbvalue'))};
    if(typeof(setgridTitle_right)!='undefined') setgridTitle_right.onclick=function() {setgridTitle.onclick(setgridTitle_right.getAttribute('nsbvalue'))}};
  setgrid_ref = new iScroll('setgrid_scroller',{ bounce:true, zoom:false });
  setgrid.refresh=function(){setTimeout(NSB.refresh,100,setgrid_ref)};
  setgrid.GridRefreshWidth=function(){setTimeout(NSB.GridRefreshWidth,10,setgrid)};
  NSB.Grid_init('setgrid');
  NSB.addProperties(setgrid,setgrid_scroller)
  setgrid1_ref = new iScroll('setgrid1_scroller',{ bounce:true, zoom:false });
  setgrid1.refresh=function(){setTimeout(NSB.refresh,100,setgrid1_ref)};
  setgrid1.GridRefreshWidth=function(){setTimeout(NSB.GridRefreshWidth,10,setgrid1)};
  NSB.Grid_init('setgrid1');
  NSB.addProperties(setgrid1,setgrid1_scroller)
  setgrid5_ref = new iScroll('setgrid5_scroller',{ bounce:true, zoom:false });
  setgrid5.refresh=function(){setTimeout(NSB.refresh,100,setgrid5_ref)};
  setgrid5.GridRefreshWidth=function(){setTimeout(NSB.GridRefreshWidth,10,setgrid5)};
  NSB.Grid_init('setgrid5');
  NSB.addProperties(setgrid5,setgrid5_scroller)
  frmSettingsGrid.style.display = 'none';
}, false);
frmSettingsGrid.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(frmSettingsGrid);
var  sprimarykey,stable,sfields,sid,saction,stitle,totfld,sheaders,sobject,skey,svalues;

function LoadSettingsGrid() { savethefunction_rvar="";
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Loading...");
  setgrid.Left = 0;
  setgrid.Top = setgridTitle.Height;
  setgrid.Height = frmSettingsGrid.Height - setgridTitle.Height;
  setgrid.Width = frmSettingsGrid.Width;
  rcnt = setgrid.getRowCount();
  setgrid.deleteRows(rcnt);
  setgrid.refresh;
  $("#setgrid td").css("font-family" , "helvetica");
 // second grid
  setgrid1.Left = 0;
  setgrid1.Top = setgridTitle.Height;
  setgrid1.Height = frmSettingsGrid.Height - setgridTitle.Height;
  setgrid1.Width = frmSettingsGrid.Width;
  rcnt = setgrid1.getRowCount();
  setgrid1.deleteRows(rcnt);
  setgrid1.refresh;
  $("#setgrid1 td").css("font-family" , "helvetica");
 // third grid grid
  setgrid5.Left = 0;
  setgrid5.Top = setgridTitle.Height;
  setgrid5.Height = frmSettingsGrid.Height - setgridTitle.Height;
  setgrid5.Width = frmSettingsGrid.Width;
  rcnt = setgrid5.getRowCount();
  setgrid5.deleteRows(rcnt);
  setgrid5.refresh;
  $("#setgrid5 td").css("font-family" , "helvetica");
  stable = localStorage.getItem("table");
  sprimarykey = localStorage.getItem("primarykey");
  sfields = localStorage.getItem("fields");
  totfld = localStorage.getItem("fldtot");
  switch (True) {
  case ((totfld) == 1):
    sobject = setgrid;
	break;
  case ((totfld) == 2):
    sobject = setgrid1;
	break;
  case ((totfld) == 5):
    sobject = setgrid5;
  }
  sheaders = localStorage.getItem("headers");
  stitle = Replace(stable,"_" ," ");
  $("#setgridTitle h1").text("SAFIRI Mobile Project.Show > Settings > "  +  stitle);
  switch (True) {
  case ((totfld) == 1):
    setgrid.Visible = True;
    setgrid1.Visible = False;
    setgrid5.Visible = False;
	break;
  case ((totfld) == 2):
    setgrid.Visible = False;
    setgrid1.Visible = True;
    setgrid5.Visible = False;
	break;
  case ((totfld) == 5):
    setgrid.Visible = False;
    setgrid1.Visible = False;
    setgrid5.Visible = True;
  }
 var  sQRY;
  sqlList = [];
  sQRY = "SELECT * FROM ["  +  stable  +  "] ORDER BY "  +  sfields  +  ";";
  sqlList[0] = [sQRY, setgridHandler, setgridError];
  Sql(dbObj, sqlList);
}

function setgridHandler(transaction, results) { savethefunction_rvar="";
 var  fldtot, fldcnt, spfields, i, fldname;
 var  vprimarykey, fldvalue, rcnt, spheaders;
 var  sedit, sclone, sdelete, htot, hcnt, hname;
  rcnt = 0;
  spheaders = Split(sheaders,",");
  htot = spheaders.length - 1;
  for   (hcnt = 0; hcnt  <= htot; hcnt ++) {
    hname = spheaders[hcnt];
    sobject.setValue(rcnt,hcnt,hname);
  }
  rcnt = 1;
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sobject.addRows(1);
    vprimarykey = row[sprimarykey];
    spfields = Split(sfields,",");
    fldtot = spfields.length - 1;
    svalues="";
    for   (fldcnt = 0; fldcnt  <= fldtot; fldcnt ++) {
      fldname = spfields[fldcnt];
      fldvalue = row[fldname];
      switch (True) {
      case ((fldname) == "HolidayID"):
        fldvalue = FormatDateTime(fldvalue, "YYYY-MM-DD");
      }
      sobject.setValue(rcnt,fldcnt,fldvalue);
      svalues = svalues  +  fldvalue  +  FM;
    }
 // save values for later retrieval
    svalues = RemoveDelim(svalues,FM);
    skey = stable  +  "*"  +  vprimarykey;
    localStorage.setItem(skey,svalues);
 // finalize the grid
    sedit = GridAddImageDefinitionAction(sobject,"edit" ,vprimarykey,"edit.png");
    sclone = GridAddImageDefinitionAction(sobject,"clone" ,vprimarykey,"duplicate.png");
    sdelete = GridAddImageDefinitionAction(sobject,"delete" ,vprimarykey,"delete.png");
    sobject.setValue(rcnt,fldtot+1,sedit);
    sobject.setValue(rcnt,fldtot+2,sclone);
    sobject.setValue(rcnt,fldtot+3,sdelete);
    rcnt = rcnt + 1;
  }
  GridSetHeight(sobject,"32px");
  GridAlternateColor(sobject);
  switch (True) {
  case ((totfld) == 1):
    GridCenterAlign(sobject,1,3);
	break;
  case ((totfld) == 2):
    GridCenterAlign(sobject,2,4);
	break;
  case ((totfld) == 5):
    GridCenterAlign(sobject,5,7);
  }

  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function setgridError(transaction, results) { savethefunction_rvar="";
  NSB.ShowProgress(False);
  NSB.MsgBox("SQL Error: "  +  results.code  +  ": "  +  results.message);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

setgridTitle.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Back"):
    ChangeForm(frmSettings);
	break;
  case ((choice) == "Refresh"):
    LoadSettingsGrid();
	break;
  case ((choice) == "Add"):
   var  sfldtot;
    sfldtot = localStorage.getItem("fldtot");
    switch (True) {
    case ((sfldtot) == 1):
      NextAvailableId("frmSettingsEditor");
      ChangeForm(frmSettingsEditor);
	break;
    case ((sfldtot) == 2):
      NextAvailableId("frmSettingsEditor2");
      ChangeForm(frmSettingsEditor2);
	break;
    case ((sfldtot) == 5):
      NextAvailableId("frmSettingsEditor5");
      ChangeForm(frmSettingsEditor5);
	break;
    }
  }
return savethefunction_rvar; }

frmSettingsGrid.onshow = function() { savethefunction_rvar="";
  LoadSettingsGrid();
return savethefunction_rvar; }

setgrid.onclick = function() { savethefunction_rvar="";
 var  gRowCol;
  gRowCol = Split(event.target.id, "_");
  saction = LCase(gRowCol[1] );
  sid = gRowCol[2];
  localStorage.setItem("action" ,saction);
  localStorage.setItem("id" , sid);
  switch (True) {
  case ((saction) == "edit"):
    ChangeForm(frmSettingsEditor);
	break;
  case ((saction) == "clone"):
	break;
  case ((saction) == "delete"):
    NSB.MsgBox(DeleteSettingsRecord,"Are you sure that you want to delete this "  +  stitle  +  " record?" , 4+32, "Confirm Delete");
  }
return savethefunction_rvar; }

setgrid1.onclick = function() { savethefunction_rvar="";
 var  gRowCol;
  gRowCol = Split(event.target.id, "_");
  saction = LCase(gRowCol[1] );
  sid = gRowCol[2];
  localStorage.setItem("action" ,saction);
  localStorage.setItem("id" , sid);
  switch (True) {
  case ((saction) == "edit"):
    ChangeForm(frmSettingsEditor2);
	break;
  case ((saction) == "clone"):
	break;
  case ((saction) == "delete"):
    NSB.MsgBox(DeleteSettingsRecord,"Are you sure that you want to delete this "  +  stitle  +  " record?" , 4+32, "Confirm Delete");
  }
return savethefunction_rvar; }

setgrid5.onclick = function() { savethefunction_rvar="";
 var  gRowCol;
  gRowCol = Split(event.target.id, "_");
  saction = LCase(gRowCol[1] );
  sid = gRowCol[2];
  localStorage.setItem("action" ,saction);
  localStorage.setItem("id" , sid);
  switch (True) {
  case ((saction) == "edit"):
    ChangeForm(frmSettingsEditor5);
	break;
  case ((saction) == "clone"):
	break;
  case ((saction) == "delete"):
    NSB.MsgBox(DeleteSettingsRecord,"Are you sure that you want to delete this "  +  stitle  +  " record?" , 4+32, "Confirm Delete");
  }
return savethefunction_rvar; }

function DeleteSettingsRecord(result) {
  if(result != 6 )  { return; }
 var  delRec;
 delRec = new Object();
  delRec[sprimarykey]=sid;
  DeleteRecord(stable,delRec);
  LoadSettingsGrid();
}

window.addEventListener('load', function() {
  frmSettingsEditor.style.display = 'block';
  NSB.addProperties(settingsEditorT);
  NSB.addDisableProperty(settingsEditorT);


  if(typeof(settingsEditorT.onclick)=='function'){
    if(typeof(settingsEditorT_left)!='undefined') settingsEditorT_left.onclick=function() {settingsEditorT.onclick(settingsEditorT_left.getAttribute('nsbvalue'))};
    if(typeof(settingsEditorT_right)!='undefined') settingsEditorT_right.onclick=function() {settingsEditorT.onclick(settingsEditorT_right.getAttribute('nsbvalue'))}};


  NSB.MultiInput_init('settingsEditorI');

  NSB.addProperties(settingsEditorI);
  frmSettingsEditor.style.display = 'none';
}, false);
frmSettingsEditor.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(frmSettingsEditor);

frmSettingsEditor.onshow = function() { savethefunction_rvar="";
 var  stable, stitle;
  stable = localStorage.getItem("table");
  stitle = Replace(stable,"_" ," ");
  $("#settingsEditorT h1").text("SAFIRI Mobile Project.Show > Maintain > "  +  stitle);
  settingsEditorI.Left = 0;
  settingsEditorI.Top = 42;
  settingsEditorI.Width = frmSettingsEditor.Width - 20;
  ReadRecord();
return savethefunction_rvar; }


settingsEditorT.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Save"):
    SaveRecord();
	break;
  case ((choice) == "Back"):
    ChangeForm(frmSettingsGrid);
  }
return savethefunction_rvar; }

function ReadRecord() { savethefunction_rvar="";
   var  sid, stable, sfieldsH, skey, svalue;
 // read the table to process
    stable = localStorage.getItem("table");
    sid = localStorage.getItem("id");
    sfieldsH = localStorage.getItem("fieldsH")  +  " :";
    settingsEditorI.innerHTML = Replace(settingsEditorI.innerHTML,"***Description***" ,sfieldsH);
    skey = stable  +  "*"  +  sid;
    svalue = localStorage.getItem(skey);
    if(IsNull(svalue) == True) {
      settingsEditorI.setValue(1,"");
 } else {
      settingsEditorI.setValue(1,svalue);
    }
return savethefunction_rvar; }

function SaveRecord() { savethefunction_rvar="";
 var  snew, sfieldsH;
  sfieldsH = localStorage.getItem("fieldsH");
 // check if old value = new value
  snew = settingsEditorI.getValue(1);
  snew = Trim(snew);
  if(Len(snew) == 0) {
    NSB.MsgBox("The "  +  sfieldh  +  " cannot be blank, enter a value please.");
     return;
  }
 var  sid, stable, sprimarykey, sfields, skey, svalue, saction;
 // read the table to process
  stable = localStorage.getItem("table");
  sid = localStorage.getItem("id");
  sprimarykey = localStorage.getItem("primarykey");
  sfields = localStorage.getItem("fields");
  saction = localStorage.getItem("action");
  skey = stable  +  "*"  +  sid;
  snew = Replace(snew,"'" ,"''");
  snew = InSingleQuote(snew);
 var  nrecord;
 nrecord = new Object();
  nrecord[sprimarykey]=sid;
  nrecord[sfields]=snew;
  switch (True) {
  case ((saction) == "new"):
    InsertRecord(stable,nrecord);
	break;
  default:
   var  nwhere;
 nwhere = new Object();
    nwhere[sprimarykey]=sid;
    UpdateRecord(stable,nrecord,nwhere);
  }
}
window.addEventListener('load', function() {
  frmSettingsEditor2.style.display = 'block';
  NSB.addProperties(settingsEditorT2);
  NSB.addDisableProperty(settingsEditorT2);


  if(typeof(settingsEditorT2.onclick)=='function'){
    if(typeof(settingsEditorT2_left)!='undefined') settingsEditorT2_left.onclick=function() {settingsEditorT2.onclick(settingsEditorT2_left.getAttribute('nsbvalue'))};
    if(typeof(settingsEditorT2_right)!='undefined') settingsEditorT2_right.onclick=function() {settingsEditorT2.onclick(settingsEditorT2_right.getAttribute('nsbvalue'))}};


  NSB.MultiInput_init('settingsEditorI2');

  NSB.addProperties(settingsEditorI2);
  frmSettingsEditor2.style.display = 'none';
}, false);
frmSettingsEditor2.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(frmSettingsEditor2);

frmSettingsEditor2.onshow = function() { savethefunction_rvar="";
 var  stable, stitle;
  stable = localStorage.getItem("table");
  stitle = Replace(stable,"_" ," ");
  $("#settingsEditorT2 h1").text("SAFIRI Mobile Project.Show > Maintain > "  +  stitle);
  settingsEditorI2.Left = 0;
  settingsEditorI2.Top = 42;
  settingsEditorI2.Width = frmSettingsEditor2.Width - 20;
  ReadRecord2();
return savethefunction_rvar; }


settingsEditorT2.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Save"):
    SaveRecord2();
	break;
  case ((choice) == "Back"):
    ChangeForm(frmSettingsGrid);
  }
return savethefunction_rvar; }

function ReadRecord2() { savethefunction_rvar="";
   var  sid, stable, sfieldsH, skey, svalue;
   var  sfield1, sfield2, svalue1, svalue2;
 // read the table to process
    stable = localStorage.getItem("table");
    sid = localStorage.getItem("id");
    sfieldsH = localStorage.getItem("fieldsH");
    sfield1 = MvField(sfieldsH,1,",");
    sfield2 = MvField(sfieldsH,2,",");
 // replace the values and placeholders
    settingsEditorI2.innerHTML = Replace(settingsEditorI2.innerHTML,"***ph1***" ,"Enter "  +  sfield1);
    settingsEditorI2.innerHTML = Replace(settingsEditorI2.innerHTML,"***ph2***" ,"Enter "  +  sfield2);
    settingsEditorI2.innerHTML = Replace(settingsEditorI2.innerHTML,"***Field1***" ,sfield1  +  " : ");
    settingsEditorI2.innerHTML = Replace(settingsEditorI2.innerHTML,"***Field2***" ,sfield2  +  " : ");
    skey = stable  +  "*"  +  sid;
    svalue = localStorage.getItem(skey);
    if(IsNull(svalue) == True) {
      settingsEditorI2.setValue(1,"");
      settingsEditorI2.setValue(2,"");
 } else {
      svalue1 = MvField(svalue,1,FM);
      svalue2 = MvField(svalue,2,FM);
      settingsEditorI2.setValue(1,svalue1);
      settingsEditorI2.setValue(2,svalue2);
    }
return savethefunction_rvar; }

function SaveRecord2() { savethefunction_rvar="";
 var  snew, sfieldsH, sfield1, sfield2, svalue1, svalue2;
  sfieldsH = localStorage.getItem("fieldsH");
  sfield1 = MvField(sfieldsH,1,",");
  sfield2 = MvField(sfieldsH,2,",");
 // check if old value = new value
  svalue1 = Trim(settingsEditorI2.getValue(1));
  svalue2 = Trim(settingsEditorI2.getValue(2));
  if(Len(svalue1) == 0) {
    NSB.MsgBox("The "  +  sfield1  +  " cannot be blank, enter a value please.");
     return;
  }
  if(Len(svalue2) == 0) {
    NSB.MsgBox("The "  +  sfield2  +  " cannot be blank, enter a value please.");
     return;
  }
 var  sid, stable, sprimarykey, sfields, skey, svalue, saction;
 // read the table to process
  stable = localStorage.getItem("table");
  sid = localStorage.getItem("id");
  sprimarykey = localStorage.getItem("primarykey");
  sfields = localStorage.getItem("fields");
  sfield1 = MvField(sfields,1,",");
  sfield2 = MvField(sfields,2,",");
  saction = localStorage.getItem("action");
  skey = stable  +  "*"  +  sid;
  svalue1 = Replace(svalue1,"'" ,"''");
  svalue2 = Replace(svalue2,"'" ,"''");
  svalue1 = InSingleQuote(svalue1);
  svalue2 = InSingleQuote(svalue2);
 var  nrecord;
 nrecord = new Object();
  nrecord[sprimarykey]=sid;
  nrecord[sfield1]=svalue1;
  nrecord[sfield2]=svalue2;
  switch (True) {
  case ((saction) == "new"):
    InsertRecord(stable,nrecord);
	break;
  default:
   var  nwhere;
 nwhere = new Object();
    nwhere[sprimarykey]=sid;
    UpdateRecord(stable,nrecord,nwhere);
  }
}
window.addEventListener('load', function() {
  frmSettingsEditor5.style.display = 'block';
  NSB.addProperties(settingsEditorT5);
  NSB.addDisableProperty(settingsEditorT5);


  if(typeof(settingsEditorT5.onclick)=='function'){
    if(typeof(settingsEditorT5_left)!='undefined') settingsEditorT5_left.onclick=function() {settingsEditorT5.onclick(settingsEditorT5_left.getAttribute('nsbvalue'))};
    if(typeof(settingsEditorT5_right)!='undefined') settingsEditorT5_right.onclick=function() {settingsEditorT5.onclick(settingsEditorT5_right.getAttribute('nsbvalue'))}};


  NSB.MultiInput_init('settingsEditorI5');

  NSB.addProperties(settingsEditorI5);
  frmSettingsEditor5.style.display = 'none';
}, false);
frmSettingsEditor5.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(frmSettingsEditor5);

frmSettingsEditor5.onshow = function() { savethefunction_rvar="";
 var  stable, stitle;
  stable = localStorage.getItem("table");
  stitle = Replace(stable,"_" ," ");
  $("#settingsEditorT5 h1").text("SAFIRI Mobile Project.Show > Maintain > "  +  stitle);
  settingsEditorI5.Left = 0;
  settingsEditorI5.Top = 42;
  settingsEditorI5.Width = frmSettingsEditor5.Width - 20;
  ReadRecord5();
return savethefunction_rvar; }


settingsEditorT5.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Save"):
    SaveRecord5();
	break;
  case ((choice) == "Back"):
    ChangeForm(frmSettingsGrid);
  }
return savethefunction_rvar; }

function ReadRecord5() { savethefunction_rvar="";
   var  sid, stable, sfieldsH, skey, svalue;
   var  sfield1, sfield2, sfield3, sfield4, sfield5;
   var  svalue1, svalue2, svalue3, svalue4, svalue5;
 // read the table to process
    stable = localStorage.getItem("table");
    sid = localStorage.getItem("id");
    sfieldsH = localStorage.getItem("fieldsH");
    sfield1 = MvField(sfieldsH,1,",");
    sfield2 = MvField(sfieldsH,2,",");
    sfield3 = MvField(sfieldsH,3,",");
    sfield4 = MvField(sfieldsH,4,",");
    sfield5 = MvField(sfieldsH,5,",");
 // replace the values and placeholders
    settingsEditorI5.innerHTML = Replace(settingsEditorI5.innerHTML,"***ph1***" ,"Enter "  +  sfield1);
    settingsEditorI5.innerHTML = Replace(settingsEditorI5.innerHTML,"***ph2***" ,"Enter "  +  sfield2);
    settingsEditorI5.innerHTML = Replace(settingsEditorI5.innerHTML,"***ph3***" ,"Enter "  +  sfield3);
    settingsEditorI5.innerHTML = Replace(settingsEditorI5.innerHTML,"***ph4***" ,"Enter "  +  sfield4);
    settingsEditorI5.innerHTML = Replace(settingsEditorI5.innerHTML,"***ph5***" ,"Enter "  +  sfield5);
    settingsEditorI5.innerHTML = Replace(settingsEditorI5.innerHTML,"***Field1***" ,sfield1  +  " : ");
    settingsEditorI5.innerHTML = Replace(settingsEditorI5.innerHTML,"***Field2***" ,sfield2  +  " : ");
    settingsEditorI5.innerHTML = Replace(settingsEditorI5.innerHTML,"***Field3***" ,sfield3  +  " : ");
    settingsEditorI5.innerHTML = Replace(settingsEditorI5.innerHTML,"***Field4***" ,sfield4  +  " : ");
    settingsEditorI5.innerHTML = Replace(settingsEditorI5.innerHTML,"***Field5***" ,sfield5  +  " : ");
    skey = stable  +  "*"  +  sid;
    svalue = localStorage.getItem(skey);
    if(IsNull(svalue) == True) {
      settingsEditorI5.setValue(1,"");
      settingsEditorI5.setValue(2,"");
      settingsEditorI5.setValue(3,"");
      settingsEditorI5.setValue(4,"");
      settingsEditorI5.setValue(5,"");
 } else {
      svalue1 = MvField(svalue,1,FM);
      svalue2 = MvField(svalue,2,FM);
      svalue3 = MvField(svalue,3,FM);
      svalue4 = MvField(svalue,4,FM);
      svalue5 = MvField(svalue,5,FM);
      settingsEditorI5.setValue(1,svalue1);
      settingsEditorI5.setValue(2,svalue2);
      settingsEditorI5.setValue(3,svalue3);
      settingsEditorI5.setValue(4,svalue4);
      settingsEditorI5.setValue(5,svalue5);
    }
return savethefunction_rvar; }

function SaveRecord5() { savethefunction_rvar="";
 var  snew, sfieldsH, sfield1, sfield2, sfield3, sfield4, sfield5;
 var  svalue1, svalue2, svalue3, svalue4, svalue5;
  sfieldsH = localStorage.getItem("fieldsH");
  sfield1 = MvField(sfieldsH,1,",");
  sfield2 = MvField(sfieldsH,2,",");
  sfield3 = MvField(sfieldsH,3,",");
  sfield4 = MvField(sfieldsH,4,",");
  sfield5 = MvField(sfieldsH,5,",");
 // check if old value = new value
  svalue1 = Trim(settingsEditorI5.getValue(1));
  svalue2 = Trim(settingsEditorI5.getValue(2));
  svalue3 = Trim(settingsEditorI5.getValue(3));
  svalue4 = Trim(settingsEditorI5.getValue(4));
  svalue5 = Trim(settingsEditorI5.getValue(5));
  if(Len(svalue1) == 0) {
    NSB.MsgBox("The "  +  sfield1  +  " cannot be blank, enter a value please.");
     return;
  }
  if(Len(svalue2) == 0) {
    NSB.MsgBox("The "  +  sfield2  +  " cannot be blank, enter a value please.");
     return;
  }
  if(Len(svalue3) == 0) {
    NSB.MsgBox("The "  +  sfield3  +  " cannot be blank, enter a value please.");
     return;
  }
  if(Len(svalue4) == 0) {
    NSB.MsgBox("The "  +  sfield4  +  " cannot be blank, enter a value please.");
     return;
  }
  if(Len(svalue5) == 0) {
    NSB.MsgBox("The "  +  sfield5  +  " cannot be blank, enter a value please.");
     return;
  }
 var  sid, stable, sprimarykey, sfields, skey, svalue, saction;
 // read the table to process
  stable = localStorage.getItem("table");
  sid = localStorage.getItem("id");
  sprimarykey = localStorage.getItem("primarykey");
  sfields = localStorage.getItem("fields");
  sfield1 = MvField(sfields,1,",");
  sfield2 = MvField(sfields,2,",");
  sfield3 = MvField(sfields,3,",");
  sfield4 = MvField(sfields,4,",");
  sfield5 = MvField(sfields,5,",");
  saction = localStorage.getItem("action");
  skey = stable  +  "*"  +  sid;
  svalue1 = Replace(svalue1,"'" ,"''");
  svalue2 = Replace(svalue2,"'" ,"''");
  svalue3 = Replace(svalue3,"'" ,"''");
  svalue4 = Replace(svalue4,"'" ,"''");
  svalue1 = InSingleQuote(svalue1);
  svalue2 = InSingleQuote(svalue2);
  svalue3 = InSingleQuote(svalue3);
  svalue4 = InSingleQuote(svalue4);
  svalue5 = NumericOnly(svalue5);
  svalue5 = _jsCint(svalue5);
 var  nrecord;
  nrecord = new Object();
  nrecord[sprimarykey]=sid;
  nrecord[sfield1]=svalue1;
  nrecord[sfield2]=svalue2;
  nrecord[sfield3]=svalue3;
  nrecord[sfield4]=svalue4;
  nrecord[sfield5]=svalue5;
  switch (True) {
  case ((saction) == "new"):
    InsertRecord(stable,nrecord);
	break;
  default:
   var  nwhere;
 nwhere = new Object();
    nwhere[sprimarykey]=sid;
    UpdateRecord(stable,nrecord,nwhere);
  }
}
window.addEventListener('load', function() {
  frmDashboard.style.display = 'block';
  NSB.addProperties(dbTitle);
  NSB.addDisableProperty(dbTitle);


  if(typeof(dbTitle.onclick)=='function'){
    if(typeof(dbTitle_left)!='undefined') dbTitle_left.onclick=function() {dbTitle.onclick(dbTitle_left.getAttribute('nsbvalue'))};
    if(typeof(dbTitle_right)!='undefined') dbTitle_right.onclick=function() {dbTitle.onclick(dbTitle_right.getAttribute('nsbvalue'))}};
  dbGrid_ref = new iScroll('dbGrid_scroller',{ bounce:true, zoom:false });
  dbGrid.refresh=function(){setTimeout(NSB.refresh,100,dbGrid_ref)};
  dbGrid.GridRefreshWidth=function(){setTimeout(NSB.GridRefreshWidth,10,dbGrid)};
  NSB.Grid_init('dbGrid');
  NSB.addProperties(dbGrid,dbGrid_scroller)
  frmDashboard.style.display = 'none';
}, false);
frmDashboard.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(frmDashboard);
var  sprimarykey,stable,sfields,sid,saction,stitle,totfld,sheaders,sportfolio, sQRY, sworkstream;

function LoadProjectsGrid() { savethefunction_rvar="";
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Loading...");
  dbGrid.Left = 0;
  dbGrid.Top = dbTitle.Height;
  dbGrid.Height = frmDashboard.Height - dbTitle.Height;
  dbGrid.Width = frmDashboard.Width;
  rcnt = dbGrid.getRowCount();
  dbGrid.deleteRows(rcnt);
  dbGrid.refresh;
  $("#dbGrid td").css("font-family" , "helvetica");
  stable = localStorage.getItem("table");
  sprimarykey = localStorage.getItem("primarykey");
  sfields = localStorage.getItem("fields");
  totfld = localStorage.getItem("fldtot");
  sheaders = localStorage.getItem("headers");
  sportfolio = localStorage.getItem("portfolio");
  sworkstream = localStorage.getItem("workstream");
  if(IsNull(stable)==True ) { stable = ""; }
  if(IsNull(sprimarykey)==True ) { sprimarykey=""; }
  if(IsNull(sfields)==True ) { sfields=""; }
  if(IsNull(totfld) == True ) { totfld=0; }
  if(IsNull(sheaders) == True ) { sheaders=""; }
  if(IsNull(sportfolio)==True ) { sportfolio=""; }
  if(IsNull(sworkstream)==True ) { sworkstream=""; }
  stitle = Replace(stable,"_" ," ");
  sportfolio = Replace(sportfolio,'\r',"");
  sportfolio = Replace(sportfolio,'\n',"");
  sportfolio = Replace(sportfolio,'\n',"");
  sportfolio = Replace(sportfolio,'\t',"");
  sportfolio = Trim(sportfolio);
  sworkstream = Replace(sworkstream,'\r',"");
  sworkstream = Replace(sworkstream,'\n',"");
  sworkstream = Replace(sworkstream,'\n',"");
  sworkstream = Replace(sworkstream,'\t',"");
  sworkstream = Trim(sworkstream);
  switch (True) {
  case ((stable) == "Portfolio"):
    $("#dbTitle h1").text("SAFIRI Mobile Project.Show > "  +  stitle  +  " > Dashboard");
    sqlList = [];
    sQRY = "SELECT "  +  sfields  +  " FROM ["  +  stable  +  "] ORDER BY WBS;";
 //console.log(sQRY)
    sqlList[0] = [sQRY, dbHandler, dbError];
	break;
  case ((stable) == "Workstream"):
    $("#dbTitle h1").text("SAFIRI Mobile Project.Show > "  +  sportfolio  +  " > Dashboard");
    sQRY = "SELECT "  +  sfields  +  " FROM ["  +  stable  +  "] WHERE PortfolioName = '"  +  sportfolio  +  "' ORDER BY WBS;";
 //console.log(sQRY)
    sqlList = [];
    sqlList[0] = [sQRY, dbHandler, dbError];
	break;
  case ((stable) == "Projects"):
    $("#dbTitle h1").text("SAFIRI Mobile Project.Show > "  +  sportfolio  +  " > "  +  sworkstream  +  " > Dashboard");
    sQRY = "SELECT "  +  sfields  +  " FROM ["  +  stable  +  "] WHERE WorkstreamName = '"  +  sworkstream  +  "' ORDER BY WBS;";
 //console.log(sQRY)
    sqlList = [];
    sqlList[0] = [sQRY, dbHandler, dbError];
  }
  Sql(dbObj, sqlList);
}

function dbHandler(transaction, results) { savethefunction_rvar="";
 var  fldtot, fldcnt, spfields, i, fldname, fldvaluep;
 var  vprimarykey, fldvalue, rcnt, spheaders;
 var  sedit, sclone, sdelete, htot, hcnt, hname;
 var  sExpectedImage, sBudgetImage, syears, smonths;
  rcnt = 0;
 //console.log(sheaders)
  spheaders = Split(sheaders,",");
  htot = spheaders.length - 1;
  for   (hcnt = 0; hcnt  <= htot; hcnt ++) {
    hname = spheaders[hcnt];
    dbGrid.setValue(rcnt,hcnt,hname);
  }
  rcnt = 1;
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    dbGrid.addRows(1);
    vprimarykey = row[sprimarykey];
 // remove image fields, there are not displayed on their own
    sfields = MvRemoteItem(sfields,"ExpectedImage" ,",");
    sfields = MvRemoteItem(sfields,"BudgetImage" ,",");
    spfields = Split(sfields,",");
    fldtot = spfields.length - 1;
    for   (fldcnt = 0; fldcnt  <= fldtot; fldcnt ++) {
      fldname = spfields[fldcnt];
      fldvalue = row[fldname];
      if(IsNull(fldvalue) ) { fldvalue = ""; }
      switch (True) {
      case ((fldname) == "PlannedStart" ): case ((fldname) ==  "PlannedEnd"):
        if(Len(fldvalue)> 0 ) { fldvalue = FormatDateTime(fldvalue, "DD/MM/YYYY"); }
	break;
      case ((fldname) == "DaysAvailable" ): case ((fldname) ==  "PlannedDuration"):
        if(Len(fldvalue)> 0) {
          fldvaluep = Math.abs(fldvalue);
          if(parseFloat(fldvaluep) >= 365) {
            smonths = ((fldvaluep*1)%Math.round(365*1));
            smonths = FixMonths(smonths);
            syears = parseFloat(fldvaluep) / 365;
            syears = _jsCint(syears);
            if(parseFloat(fldvalue) < 0) {
              fldvalue = "-"  +  syears  +  "."  +  smonths  +  " yrs";
 } else {
              fldvalue = syears  +  "."  +  smonths  +  " yrs";
            }
 } else {
            fldvalue = FormatNumber(fldvalue,0)  +  " dys";
          }
        }
	break;
      case ((fldname) == "Budget" ): case ((fldname) ==  "Expenditure" ): case ((fldname) ==  "TotalBudget" ): case ((fldname) == "TotalExpenditure"):
        if(Len(fldvalue)>0) {
          fldvalue = parseFloat(fldvalue) / 1000000;
          fldvalue = Round(fldvalue,0);
          fldvalue = FormatNumber(fldvalue,2);
        }
	break;
      case ((fldname) == "ActualProgress" ): case ((fldname) == "PlannedProgress" ): case ((fldname) == "PercentageProgress"):
        fldvalue = FormatNumber(fldvalue,0)  +  "%";
	break;
      case ((fldname) == "BehindAhead"):
        if(Len(fldvalue)> 0) {
          fldvaluep = Math.abs(fldvalue);
          if(parseFloat(fldvaluep) >= 365) {
            smonths = ((fldvaluep*1)%Math.round(365*1));
            smonths = FixMonths(smonths);
            syears = parseFloat(fldvaluep) / 365;
            syears = _jsCint(syears);
            if(parseFloat(fldvalue) < 0) {
              fldvalue = "-"  +  syears  +  "."  +  smonths  +  " yrs";
 } else {
              fldvalue = syears  +  "."  +  smonths  +  " yrs";
            }
 } else {
            fldvalue = FormatNumber(fldvalue,0)  +  " dys";
          }
        }
        sExpectedImage = row["ExpectedImage"];
        sExpectedImage = sExpectedImage  +  ".png";
        fldvalue = GridAddTextImageDefinition(dbGrid,rcnt,fldcnt,fldvalue,sExpectedImage);
	break;
      case ((fldname) == "PercentageExpenditure"):
        sBudgetImage = row["BudgetImage"];
        sBudgetImage = sBudgetImage  +  ".png";
        fldvalue = FormatNumber(fldvalue,0)  +  "%";
        fldvalue = GridAddTextImageDefinition(dbGrid,rcnt,fldcnt,fldvalue,sBudgetImage);
	break;
      case ((fldname) == "ExpectedProgress"):
        sExpectedImage = row["ExpectedImage"];
        sExpectedImage = sExpectedImage  +  ".png";
        fldvalue = FormatNumber(fldvalue,0)  +  "%";
        fldvalue = GridAddTextImageDefinition(dbGrid,rcnt,fldcnt,fldvalue,sExpectedImage);
	break;
      }
      dbGrid.setValue(rcnt,fldcnt,fldvalue);
    }
    sedit = GridAddImageDefinitionAction(dbGrid,"edit" ,vprimarykey,"edit.png");
    sclone = GridAddImageDefinitionAction(dbGrid,"clone" ,vprimarykey,"duplicate.png");
    sdelete = GridAddImageDefinitionAction(dbGrid,"delete" ,vprimarykey,"delete.png");
    dbGrid.setValue(rcnt,fldtot+1,sedit);
    dbGrid.setValue(rcnt,fldtot+2,sclone);
    dbGrid.setValue(rcnt,fldtot+3,sdelete);
    rcnt = rcnt + 1;
  }
  GridSetHeight(dbGrid,"32px");
  GridAlternateColor(dbGrid);
  GridRightAlign(dbGrid,5,13);
  GridCenterAlign(dbGrid,14,16);
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function dbError(transaction, results) { savethefunction_rvar="";
  NSB.ShowProgress(False);
  NSB.MsgBox("SQL Error: "  +  results.code  +  ": "  +  results.message);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

dbTitle.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Back"):
    switch (True) {
    case ((catFrom) == "portfolioselector"):
      ChangeForm(frmPortfolioSelector);
	break;
    case ((catFrom) == "projectselector"):
      ChangeForm(frmProjectSelector);
	break;
    default:
      ChangeForm(frmDashboardSelector);
	break;
    }
	break;
  case ((choice) == "Refresh"):
    LoadProjectsGrid();
	break;
  }
return savethefunction_rvar; }

frmDashboard.onshow = function() { savethefunction_rvar="";
  LoadProjectsGrid();
return savethefunction_rvar; }

dbGrid.onclick = function() { savethefunction_rvar="";
 var  gRowCol;
  gRowCol = Split(event.target.id, "_");
  saction = LCase(gRowCol[1] );
  sid = gRowCol[2];
  localStorage.setItem("action" ,saction);
  localStorage.setItem("id" , sid);
  switch (True) {
  case ((saction) == "edit"):
    ChangeForm(frmProject);
	break;
  case ((saction) == "clone"):
	break;
  case ((saction) == "delete"):
    NSB.MsgBox(DeleteProject,"Are you sure that you want to delete this "  +  stitle  +  " record?" , 4+32, "Confirm Delete");
	break;
  }
return savethefunction_rvar; }

function DeleteProject(result) {
  if(result != 6 )  { return; }
 var  delRec;
 delRec = new Object();
  delRec[sprimarykey]=sid;
  DeleteRecord(stable,delRec);
  LoadProjectsGrid();
}

window.addEventListener('load', function() {
  frmPortfolioSelector.style.display = 'block';
  NSB.List_jqm_init('portList','',true,'100%',false);
  portList_ref = new iScroll('portList_scroller',{ bounce:true, zoom:false });
  portList.refresh=function(){if (typeof portList_ref!='undefined') setTimeout(NSB.refresh,100,portList_ref)};
  NSB.addProperties(portList, portList_scroller);

(function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('portList_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
  NSB.addProperties(portListTitle);
  NSB.addDisableProperty(portListTitle);


  if(typeof(portListTitle.onclick)=='function'){
    if(typeof(portListTitle_left)!='undefined') portListTitle_left.onclick=function() {portListTitle.onclick(portListTitle_left.getAttribute('nsbvalue'))};
    if(typeof(portListTitle_right)!='undefined') portListTitle_right.onclick=function() {portListTitle.onclick(portListTitle_right.getAttribute('nsbvalue'))}};
  frmPortfolioSelector.style.display = 'none';
}, false);
frmPortfolioSelector.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(frmPortfolioSelector);
function LoadPortfolios() { savethefunction_rvar="";
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Loading...");
  portList.deleteItem("all");
  portList.Top = portListTitle.Height;
  portList.Height = frmPortfolioSelector.Height - portListTitle.Height;
  sqlList = [];
  sqlList[0] = ["SELECT Description FROM Portfolio ORDER BY Description;" , portListHandler, portListError];
  Sql(dbObj, sqlList);
}

function portListHandler(transaction, results) { savethefunction_rvar="";
 var  row, i, sdescription;
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sdescription = row["Description"];
    if(IsNull(sdescription) == True ) { sdescription = ""; }
    if(Len(sdescription) > 0 ) { portList.addItem(sdescription); }
  }
  portList.refresh();
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function portListError(transaction, results) { savethefunction_rvar="";
  NSB.ShowProgress(False);
  NSB.MsgBox("SQL Error: "  +  results.code  +  ": "  +  results.message);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

portList.onclick = function(i) { savethefunction_rvar="";
  if(TypeName(i) == "object" )  { return savethefunction_rvar; }
 var  strItem;
  catFrom = "portfolioselector";
  strItem = portList.getItem(i);
  localStorage.setItem("portfolio" , strItem);
  localStorage.setItem("table" , "Workstream");
  localStorage.setItem("primarykey" , "ID");
  localStorage.setItem("fields" ,"ID,Wbs,Description,ExpectedImage,BudgetImage,PlannedStart,PlannedEnd,PlannedDuration,DaysAvailable,BehindAhead,TotalBudget,TotalExpenditure,PercentageExpenditure,ExpectedProgress,PercentageProgress,PlannedProgress");
  localStorage.setItem("headers" ,"ID,Wbs,Name,Start,Finish,Duration,Days Available,Behind/Ahead,Budget (M),Expenditure (M),% Expenditure,% Expected,% Progress,% Planned,Edit,Clone,Delete");
  ChangeForm(frmDashboard);
return savethefunction_rvar; }

portListTitle.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Back"):
    ChangeForm(frmDashboardSelector);
  }
return savethefunction_rvar; }

frmPortfolioSelector.onshow = function() { savethefunction_rvar="";
  LoadPortfolios();
return savethefunction_rvar; }


window.addEventListener('load', function() {
  frmProjectSelector.style.display = 'block';
  NSB.List_jqm_init('projectList','',true,'400',false);
  projectList_ref = new iScroll('projectList_scroller',{ bounce:true, zoom:false });
  projectList.refresh=function(){if (typeof projectList_ref!='undefined') setTimeout(NSB.refresh,100,projectList_ref)};
  NSB.addProperties(projectList, projectList_scroller);

(function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('projectList_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
  NSB.addProperties(projectListTitle);
  NSB.addDisableProperty(projectListTitle);


  if(typeof(projectListTitle.onclick)=='function'){
    if(typeof(projectListTitle_left)!='undefined') projectListTitle_left.onclick=function() {projectListTitle.onclick(projectListTitle_left.getAttribute('nsbvalue'))};
    if(typeof(projectListTitle_right)!='undefined') projectListTitle_right.onclick=function() {projectListTitle.onclick(projectListTitle_right.getAttribute('nsbvalue'))}};
  NSB.List_jqm_init('projectList1','',true,'100%',false);
  projectList1_ref = new iScroll('projectList1_scroller',{ bounce:true, zoom:false });
  projectList1.refresh=function(){if (typeof projectList1_ref!='undefined') setTimeout(NSB.refresh,100,projectList1_ref)};
  NSB.addProperties(projectList1, projectList1_scroller);

(function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('projectList1_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
  frmProjectSelector.style.display = 'none';
}, false);
frmProjectSelector.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(frmProjectSelector);
function LoadMyProjects() { savethefunction_rvar="";
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Loading...");
  projectList.deleteItem("all");
  projectList1.deleteItem("all");
  projectList.Top = projectListTitle.Height;
  projectList1.Top = projectListTitle.Height;
  projectList.Height = frmProjectSelector.Height - projectListTitle.Height;
  projectList1.Height = frmProjectSelector.Height - projectListTitle.Height;
  projectList.Width = 400;
  projectList1.Left = 401;
  projectList1.Width = frmProjectSelector.Width - 401;
  sqlList = [];
  sqlList[0] = ["SELECT Description FROM Portfolio ORDER BY Description;" , projectListHandler, projectListError];
  Sql(dbObj, sqlList);
}

function projectListHandler(transaction, results) { savethefunction_rvar="";
 var  row, i, sdescription;
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sdescription = row["Description"];
    if(IsNull(sdescription) == True ) { sdescription = ""; }
    if(Len(sdescription) > 0 ) { projectList.addItem(sdescription); }
  }
  projectList.refresh();
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function projectListError(transaction, results) { savethefunction_rvar="";
  NSB.ShowProgress(False);
  NSB.MsgBox("SQL Error: "  +  results.code  +  ": "  +  results.message);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function wsListError(transaction, results) { savethefunction_rvar="";
  NSB.ShowProgress(False);
  NSB.MsgBox("SQL Error: "  +  results.code  +  ": "  +  results.message);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }


projectList.onclick = function(i) { savethefunction_rvar="";
  if(TypeName(i) == "object" )  { return savethefunction_rvar; }
 var  strItem;
  strItem = projectList.getItem(i);
  localStorage.setItem("portfolio" , strItem);
 // load workstreams
 var  sqlList,sqry;
 sqlList = [];
  sqry = "SELECT Description FROM Workstream WHERE PortfolioName = '"  +  strItem  +  "' ORDER BY Description;";
 //console.log(sqry)
  sqlList[0] = [sqry, wsListHandler, wsListError];
  Sql(dbObj, sqlList);
return savethefunction_rvar; }

function wsListHandler(transaction, results) { savethefunction_rvar="";
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Loading...");
 var  row, i, sdescription;
  projectList1.deleteItem("all");
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sdescription = row["Description"];
    if(IsNull(sdescription) == True ) { sdescription = ""; }
    if(Len(sdescription) > 0 ) { projectList1.addItem(sdescription); }
  }
  projectList1.refresh();
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

projectListTitle.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Back"):
    ChangeForm(frmDashboardSelector);
  }
return savethefunction_rvar; }

frmProjectSelector.onshow = function() { savethefunction_rvar="";
  LoadMyProjects();
return savethefunction_rvar; }


projectList1.onclick = function(i) { savethefunction_rvar="";
  if(TypeName(i) == "object" )  { return savethefunction_rvar; }
 var  strItem;
  catFrom = "projectselector";
  strItem = projectList1.getItem(i);
  localStorage.setItem("workstream" , strItem);
  localStorage.setItem("table" , "Projects");
  localStorage.setItem("primarykey" , "ID");
  localStorage.setItem("fields" ,"ID,Wbs,ProjectName,PlannedStart,PlannedEnd,ExpectedImage,BudgetImage,PlannedDuration,DaysAvailable,BehindAhead,Budget,Expenditure,PercentageExpenditure,ExpectedProgress,PercentageProgress,PlannedProgress");
  localStorage.setItem("headers" ,"ID,Wbs,Name,Start,Finish,Duration,Days Available,Behind/Ahead,Budget (M),Expenditure (M),% Expenditure,% Expected,% Progress,% Planned,Edit,Clone,Delete");
  ChangeForm(frmDashboard);
return savethefunction_rvar; }

window.addEventListener('load', function() {
  frmAnalysis.style.display = 'block';
  NSB.List_jqm_init('lstAnalysis','',true,'100%',false);
  lstAnalysis_ref = new iScroll('lstAnalysis_scroller',{ bounce:true, zoom:false });
  lstAnalysis.refresh=function(){if (typeof lstAnalysis_ref!='undefined') setTimeout(NSB.refresh,100,lstAnalysis_ref)};
  NSB.addProperties(lstAnalysis, lstAnalysis_scroller);

(function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('lstAnalysis_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
  NSB.addProperties(analysisTitle);
  NSB.addDisableProperty(analysisTitle);


  if(typeof(analysisTitle.onclick)=='function'){
    if(typeof(analysisTitle_left)!='undefined') analysisTitle_left.onclick=function() {analysisTitle.onclick(analysisTitle_left.getAttribute('nsbvalue'))};
    if(typeof(analysisTitle_right)!='undefined') analysisTitle_right.onclick=function() {analysisTitle.onclick(analysisTitle_right.getAttribute('nsbvalue'))}};
  frmAnalysis.style.display = 'none';
}, false);
frmAnalysis.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(frmAnalysis);

frmAnalysis.onshow = function() { savethefunction_rvar="";
  ResizeHeaderList(frmAnalysis,analysisTitle,lstAnalysis);
  InitializeList(lstAnalysis,"Portfolio Analysis,Cluster Analysis,Category Analysis,Sponsor Analysis,Component Analysis" ,"," ,True);
  InitializeList(lstAnalysis,"Project Stage Analysis,Funding Status Analyis" ,"," ,False);
return savethefunction_rvar; }

analysisTitle.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Home"):
    ChangeForm(frmMainMenu);
  }
return savethefunction_rvar; }

lstAnalysis.onclick = function(i) { savethefunction_rvar="";
  if(TypeName(i) == "object" )  { return savethefunction_rvar; }
 var  strItem;
  strItem = lstAnalysis.getItem(i);
  switch (True) {
  case ((strItem) == "Portfolio Analysis"):
    ChangeForm(frmPortfolioAnalysis);
	break;
  case ((strItem) == "Cluster Analysis"):
    ChangeForm(frmClusterAnalysis);
	break;
  case ((strItem) == "Category Analysis"):
    ChangeForm(frmCategoryAnalysis);
	break;
  case ((strItem) == "Sponsor Analysis"):
	break;
  case ((strItem) == "Component Analysis"):
	break;
  case ((strItem) == "Project Stage Analysis"):
	break;
  case ((strItem) == "Funding Status Analyis"):
  }
return savethefunction_rvar; }

window.addEventListener('load', function() {
  frmPortfolioAnalysis.style.display = 'block';
  NSB.List_jqm_init('portfolioAnalysisL','',true,'400',false);
  portfolioAnalysisL_ref = new iScroll('portfolioAnalysisL_scroller',{ bounce:true, zoom:false });
  portfolioAnalysisL.refresh=function(){if (typeof portfolioAnalysisL_ref!='undefined') setTimeout(NSB.refresh,100,portfolioAnalysisL_ref)};
  NSB.addProperties(portfolioAnalysisL, portfolioAnalysisL_scroller);

(function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('portfolioAnalysisL_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
  NSB.addProperties(portfolioAnalysisT);
  NSB.addDisableProperty(portfolioAnalysisT);


  if(typeof(portfolioAnalysisT.onclick)=='function'){
    if(typeof(portfolioAnalysisT_left)!='undefined') portfolioAnalysisT_left.onclick=function() {portfolioAnalysisT.onclick(portfolioAnalysisT_left.getAttribute('nsbvalue'))};
    if(typeof(portfolioAnalysisT_right)!='undefined') portfolioAnalysisT_right.onclick=function() {portfolioAnalysisT.onclick(portfolioAnalysisT_right.getAttribute('nsbvalue'))}};
portfolioAnalysisC_settings={'title':'', 'background':'white',
'description':'', 'padding':{ left: 10, top: 10, right: 10, bottom: 10 }, 'titlePadding':{ left: 2, top: 2, right: 2, bottom: 2 },
'colorScheme':'scheme01', 'showLegend':'true', 'enabled':'true',
'showToolTips':'true', 'toolTipDelay':'500' }
portfolioAnalysisC.style.position='relative';
NSB.addProperties(portfolioAnalysisC,portfolioAnalysisC_wrapper);
  frmPortfolioAnalysis.style.display = 'none';
}, false);
frmPortfolioAnalysis.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(frmPortfolioAnalysis);
var  pqry;

function LoadPortfolioAnalysis() { savethefunction_rvar="";
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Loading...");
  portfolioAnalysisL.Top = portfolioAnalysisT.Height;
  portfolioAnalysisC.Top = portfolioAnalysisT.Height;
  portfolioAnalysisL.Height = frmPortfolioAnalysis.Height - portfolioAnalysisT.Height;
  portfolioAnalysisC.Height = frmPortfolioAnalysis.Height - portfolioAnalysisT.Height;
  portfolioAnalysisL.Width = 400;
  portfolioAnalysisC.Left = 401;
  portfolioAnalysisC.Width = frmPortfolioAnalysis.Width - 401;
  InitializeList(portfolioAnalysisL,"Each Portfolio,Portfolio Timelines,Projects per Year End,Projects per Month End,Projects per Portfolio" ,"," ,True);
  InitializeList(portfolioAnalysisL,"Projects per Portfolio & Project Stage,Budget per Portfolio,Financials,Progress,Jobs Created" ,"," ,False);
  InitializeList(portfolioAnalysisL,"Jobs Created per Portfolio,Financials per Portfolio,Progress per Portfolio,Funding Status per Portfolio" ,"," ,False);
  document.body.style.cursor = 'default';
  NSB.ShowProgress(False);
}

portfolioAnalysisL.onclick = function(i) { savethefunction_rvar="";
  if(TypeName(i) == "object" )  { return savethefunction_rvar; }
 var  strItem;
  strItem = portfolioAnalysisL.getItem(i);
 //console.log(strItem)
  $("#portfolioAnalysisT h1").text("SAFIRI Mobile Project.Show > Portfolio Analysis > "  +  strItem);
  switch (True) {
  case ((strItem) == "Each Portfolio"):
    ChangeForm(frmClusterAnalysisS);
	break;
  case ((strItem) == "Portfolio Timelines"):
    PortfolioTimelines();
	break;
  case ((strItem) == "Projects per Year End"):
    ProjectsPerYearEnd();
	break;
  case ((strItem) == "Projects per Month End"):
    ProjectsPerMonthEnd();
	break;
  case ((strItem) == "Projects per Portfolio"):
    ProjectsPerPortfolio();
	break;
  case ((strItem) == "Projects per Portfolio & Project Stage"):
    ProjectsPerPortfolioAndProjectStage();
	break;
  case ((strItem) == "Budget per Portfolio"):
    BudgetPerPortfolio();
	break;
  case ((strItem) == "Financials"):
    PortfolioFinancials();
	break;
  case ((strItem) == "Progress"):
    PortfolioProgress();
	break;
  case ((strItem) == "Jobs Created"):
	break;
  case ((strItem) == "Jobs Created per Portfolio"):
	break;
  case ((strItem) == "Financials per Portfolio"):
    FinancialsPerPortfolio();
	break;
  case ((strItem) == "Progress per Portfolio"):
    ProgressPerPortfolio();
	break;
  case ((strItem) == "Funding Status per Portfolio"):
    FundingStatusPerPortfolio();
  }
return savethefunction_rvar; }

function FundingStatusPerPortfolio() {
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Working on it...");
 var  sqlList;
 sqlList = [];
  pqry = "select portfolioname,categoryaliasname,sum(budget) as budget from projects group by portfolioname,categoryaliasname order by budget desc;";
  sqlList[0] = [pqry, FundingStatusPerPortfolioH, ProjectsPerYearEndE];
  Sql(dbObj, sqlList);
}

function FundingStatusPerPortfolioH(transaction, results) { savethefunction_rvar="";
 var  row, i, sPortfolioName, sStageName, sRecords, chartRow, chartData;
 var  sStages, skey, allportfolios, allstages, spportfolios, spstages, pcnt, ptot, scnt, stot;
 // build the data to plot first, step 1
  allportfolios = "";
  allstages = "";
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sPortfolioName = row["PortfolioName"];
    sStageName = row["CategoryAliasName"];
    if(IsNull(sPortfolioName) == True ) { sPortfolioName = "Unknown"; }
    if(IsNull(sStageName) == True ) { sStageName = "Unknown"; }
    if(InStr(allportfolios,sPortfolioName) == 0 ) { allportfolios = allportfolios  +  sPortfolioName  +  VM; }
    if(InStr(allstages,sStageName) == 0 ) { allstages = allstages  +  sStageName  +  VM; }
  }
  allportfolios = Left(allportfolios, Len(allportfolios) - 1);
  allstages = Left(allstages, Len(allstages) - 1);
 // define the structure
  spportfolios = Split(allportfolios, VM);
  spstages = Split(allstages, VM);
  ptot = spportfolios.length - 1;
  stot = spstages.length - 1;
  for   (pcnt = 0; pcnt  <= ptot; pcnt ++) {
    for   (scnt = 0; scnt  <= stot; scnt ++) {
      skey = spportfolios[pcnt]  +  "*"  +  spstages[scnt];
      localStorage.setItem(skey, 0);
    }
  }
 // build the data to plot first, step 2
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sPortfolioName = row["PortfolioName"];
    sStageName = row["CategoryAliasName"];
    sRecords = row["budget"];
    if(IsNull(sPortfolioName) == True ) { sPortfolioName = "Unknown"; }
    if(IsNull(sStageName) == True ) { sStageName = "Unknown"; }
    if(IsNull(sRecords) == True ) { sRecords = 0; }
    sRecords = parseFloat(sRecords) / 1000000;
    sRecords = Round(sRecords,0);
    skey = sPortfolioName  +  "*"  +  sStageName;
    localStorage.setItem(skey,sRecords);
  }
 //define the chart data
  chartData = [];
  spportfolios = Split(allportfolios, VM);
  spstages = Split(allstages, VM);
  ptot = spportfolios.length - 1;
  stot = spstages.length - 1;
  for   (pcnt = 0; pcnt  <= ptot; pcnt ++) {
    sPortfolioName = spportfolios[pcnt];
    chartRow = {}
    chartRow["portfolio"] = sPortfolioName;
    for   (scnt = 0; scnt  <= stot; scnt ++) {
      sStageName = spstages[scnt];
      skey = sPortfolioName  +  "*"  +  sStageName;
      sRecords = localStorage.getItem(skey);
      chartRow[sStageName] = sRecords;
    }
    chartData[pcnt] = chartRow;
  }
 // build the series
 var  sSeries;
 sSeries = [];
 var  sSeriesE;
  spstages = Split(allstages, VM);
  stot = spstages.length - 1;
  for   (scnt = 0; scnt  <= stot; scnt ++) {
    sStageName = spstages[scnt];
    sSeriesE = {}
    sSeriesE["dataField"] = sStageName;
    sSeriesE["showLabels"] = False;
    sSeriesE["displayText"] = sStageName;
    sSeries[scnt] = sSeriesE;
  }
 // set the chart

  portfolioAnalysisC_settings.showBorderLine = True;
  portfolioAnalysisC_settings.source = chartData;
  portfolioAnalysisC_settings.showLegend = True;
  portfolioAnalysisC_settings.categoryAxis={dataField:"portfolio" , showGridLines:True, textRotationAngle:-90}
  portfolioAnalysisC_settings.seriesGroups = [  {  type: "stackedcolumn" ,  valueAxis: {description: "Budget (000,000)" , formatSettings: {thousandsSeparator: "," , decimalPlaces:"0"}},  series: sSeries,  }  ];
  $("#portfolioAnalysisC").jqxChart(portfolioAnalysisC_settings);
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function PortfolioTimelines() {
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Working on it...");
 var  sqlList;
 sqlList = [];
  pqry = "SELECT Description,strftime('%Y', PlannedStart) AS StartYear, strftime('%Y', PlannedEnd) AS FinishYear FROM Portfolio WHERE StartYear > 0 ORDER BY StartYear;";
 //console.log(pqry)
  sqlList[0] = [pqry, PortfolioTimelinesH, ProjectsPerYearEndE];
  Sql(dbObj, sqlList);
}

function PortfolioTimelinesH(transaction, results) { savethefunction_rvar="";
 var  row, i, sdescription, sStartYear, sFinishYear, chartRow, chartData;
 // get max and min values
 var  smin, smax;
  row = results.rows.item(0);
  smin = _jsCint(row["StartYear"]);
  smax = _jsCint(row["FinishYear"]);
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sStartYear = row["StartYear"];
    if(IsNull(sStartYear) == True ) { sStartYear = "0"; }
    sFinishYear = row["FinishYear"];
    if(IsNull(sFinishYear) == True ) { sFinishYear = "0"; }
    if(_jsCint(sStartYear) < _jsCint(smin) ) { smin = sStartYear; }
    if(_jsCint(sFinishYear) > _jsCint(smax) ) { smax = sFinishYear; }
  }
  chartData = [];
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sdescription = row["Description"];
    if(IsNull(sdescription) == True ) { sdescription = "Unknown"; }
    sStartYear = row["StartYear"];
    if(IsNull(sStartYear) == True ) { sStartYear = "0"; }
    sFinishYear = row["FinishYear"];
    if(IsNull(sFinishYear) == True ) { sFinishYear = "0"; }
    chartRow = {}
    chartRow["portfolio"] = sdescription;
    chartRow["startyear"] = sStartYear;
    chartRow["finishyear"] = sFinishYear;
    chartData[i] = chartRow;
  }
  portfolioAnalysisC_settings.showBorderLine = True;
  portfolioAnalysisC_settings.source = chartData;
  portfolioAnalysisC_settings.showLegend = False;
  portfolioAnalysisC_settings.categoryAxis={dataField:"portfolio" , showTickMarks: True,  showGridLines:True, tickMarksInterval: 1, unitInterval: 1, textRotationAngle:90}
  portfolioAnalysisC_settings.colorScheme = "scheme01";
  portfolioAnalysisC_settings.seriesGroups = [  {  type: "rangecolumn" , orientation: "horizontal" , columnsGapPercent: 100,  valueAxis:  {displayValueAxis: True,  unitInterval: 5,  flip: True,  description: "Year" ,  minValue: smin,  axisSize: "auto" ,  },  series:[  { dataFieldFrom: "startyear" , dataFieldTo: "finishyear" , opacity: 1, showLabels:True, displayText: "Portfolio"},  ]  }  ];
  $("#portfolioAnalysisC").jqxChart(portfolioAnalysisC_settings);
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function ProgressPerPortfolio() {
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Working on it...");
 var  sqlList;
 sqlList = [];
  pqry = "select Description, ExpectedProgress, ActualProgress, PlannedProgress from portfolio;";
  sqlList[0] = [pqry, ProgressPerPortfolioH, ProjectsPerYearEndE];
  Sql(dbObj, sqlList);
}

function ProgressPerPortfolioH(transaction, results) { savethefunction_rvar="";
 var  row, i, sactual, sdescription, sexpected, splanned, chartRow, chartData;
  chartData = [];
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sdescription = row["Description"];
    if(IsNull(sdescription) == True ) { sdescription = "Unknown"; }
    sexpected = row["ExpectedProgress"];
    if(IsNull(sexpected) == True ) { sexpected = "0"; }
    sactual = row["ActualProgress"];
    if(IsNull(sactual) == True ) { sactual = "0"; }
    splanned = row["PlannedProgress"];
    if(IsNull(splanned) == True ) { splanned = "0"; }
    chartRow = {}
    chartRow["portfolio"] = sdescription;
    chartRow["expected"] = sexpected;
    chartRow["actual"] = sactual;
    chartRow["planned"] = splanned;
    chartData[i] = chartRow;
  }
  portfolioAnalysisC_settings.showBorderLine = True;
  portfolioAnalysisC_settings.source = chartData;
  portfolioAnalysisC_settings.showLegend = True;
  portfolioAnalysisC_settings.categoryAxis={dataField:"portfolio" , showGridLines:True, textRotationAngle:-90}
  portfolioAnalysisC_settings.seriesGroups = [  {  type: "column" ,  valueAxis:  {description: "Percentages" , unitInterval: 5, formatSettings: {sufix:"%" , decimalPlaces:"0"}},  series:[  { dataField: "expected" , showLabels:True, displayText: "Expected"},  { dataField: "actual" , showLabels:True, displayText: "Actual"},  { dataField: "planned" , showLabels:True, displayText: "Planned"},  ]  }  ];
  $("#portfolioAnalysisC").jqxChart(portfolioAnalysisC_settings);
  $("#portfolioAnalysisC").jqxChart("refresh");
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }


function PortfolioProgress() {
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Working on it...");
 var  sqlList;
 sqlList = [];
  pqry = "select avg(ExpectedProgress) as expected, avg(ActualProgress) as actual, avg(PlannedProgress) as planned from portfolio;";
  sqlList[0] = [pqry, PortfolioProgressH, ProjectsPerYearEndE];
  Sql(dbObj, sqlList);
}



function PortfolioFinancials() {
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Working on it...");
 var  sqlList;
 sqlList = [];
  pqry = "SELECT SUM(Budget) AS Budget, SUM(Expenditure) AS Expenditure FROM Projects;";
  sqlList[0] = [pqry, PortfolioFinancialsH, ProjectsPerYearEndE];
  Sql(dbObj, sqlList);
}

function PortfolioProgressH(transaction, results) { savethefunction_rvar="";
 var  row, i, sactual, sexpected, splanned, chartRow, chartData;
  chartData = [];
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sexpected = row["expected"];
    sactual = row["actual"];
    splanned = row["planned"];
    chartRow = {}
    chartRow["project"] = "Portfolio";
    chartRow["expected"] = sexpected;
    chartRow["actual"] = sactual;
    chartRow["planned"] = splanned;
    chartData[i] = chartRow;
  }
  portfolioAnalysisC_settings.showBorderLine = True;
  portfolioAnalysisC_settings.source = chartData;
  portfolioAnalysisC_settings.showLegend = True;
  portfolioAnalysisC_settings.categoryAxis={dataField:"project" , showGridLines:True, textRotationAngle:-90}
  portfolioAnalysisC_settings.seriesGroups = [  {  type: "column" ,  valueAxis:  {description: "Percentages" , unitInterval: 5, formatSettings: {sufix:"%" , decimalPlaces:"0"}},  series:[  { dataField: "expected" , showLabels:True, displayText: "Expected"},  { dataField: "actual" , showLabels:True, displayText: "Actual"},  { dataField: "planned" , showLabels:True, displayText: "Planned"},  ]  }  ];
  $("#portfolioAnalysisC").jqxChart(portfolioAnalysisC_settings);
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function PortfolioFinancialsH(transaction, results) { savethefunction_rvar="";
 var  row, i, sBudget, sExpenditure, chartRow, chartData;
  chartData = [];
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sBudget = row["Budget"];
    if(IsNull(sBudget) == True ) { sBudget = 0; }
    sBudget = parseFloat(sBudget) / 1000000;
    sBudget = Round(sBudget,0);
    sExpenditure = row["Expenditure"];
    if(IsNull(sExpenditure) == True ) { sExpenditure = 0; }
    sExpenditure = parseFloat(sExpenditure) / 1000000;
    sExpenditure = Round(sExpenditure,0);
    chartRow = {}
    chartRow["project"] = "Portfolio";
    chartRow["budget"] = sBudget;
    chartRow["expenditure"] = sExpenditure;
    chartData[i] = chartRow;
  }
  portfolioAnalysisC_settings.showBorderLine = True;
  portfolioAnalysisC_settings.source = chartData;
  portfolioAnalysisC_settings.showLegend = True;
  portfolioAnalysisC_settings.categoryAxis={dataField:"project" , showGridLines:True, textRotationAngle:-90}
  portfolioAnalysisC_settings.seriesGroups = [  {  type: "column" ,  valueAxis:  {description: "Financials (000,000)" , formatSettings: {thousandsSeparator: "," , decimalPlaces:"0"}},  series:[  { dataField: "budget" , showLabels:True, displayText: "Budget"},  { dataField: "expenditure" , showLabels:True, displayText: "Expenditure"},  ]  }  ];
  $("#portfolioAnalysisC").jqxChart(portfolioAnalysisC_settings);
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }



function FinancialsPerPortfolio() {
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Working on it...");
 var  sqlList;
 sqlList = [];
  pqry = "SELECT PortfolioName, SUM(Budget) AS Budget, SUM(Expenditure) AS Expenditure FROM Projects GROUP BY PortfolioName ORDER BY Budget DESC;";
  sqlList[0] = [pqry, FinancialsPerPortfolioH, ProjectsPerYearEndE];
  Sql(dbObj, sqlList);
}

function FinancialsPerPortfolioH(transaction, results) { savethefunction_rvar="";
 var  row, i, sPortfolioName, sBudget, sExpenditure, chartRow, chartData;
  chartData = [];
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sPortfolioName = row["PortfolioName"];
    if(IsNull(sPortfolioName) == True ) { sPortfolioName = "Unknown"; }
    sBudget = row["Budget"];
    if(IsNull(sBudget) == True ) { sBudget = 0; }
    sBudget = parseFloat(sBudget) / 1000000;
    sBudget = Round(sBudget,0);
    sExpenditure = row["Expenditure"];
    if(IsNull(sExpenditure) == True ) { sExpenditure = 0; }
    sExpenditure = parseFloat(sExpenditure) / 1000000;
    sExpenditure = Round(sExpenditure,0);
    chartRow = {}
    chartRow["portfolio"] = sPortfolioName;
    chartRow["budget"] = sBudget;
    chartRow["expenditure"] = sExpenditure;
    chartData[i] = chartRow;
  }
  portfolioAnalysisC_settings.showBorderLine = True;
  portfolioAnalysisC_settings.source = chartData;
  portfolioAnalysisC_settings.showLegend = True;
  portfolioAnalysisC_settings.categoryAxis={dataField:"portfolio" , showGridLines:True, textRotationAngle:-90}
  portfolioAnalysisC_settings.seriesGroups = [  {  type: "column" ,  valueAxis:  {description: "Financials (000,000)" , formatSettings: {thousandsSeparator: "," , decimalPlaces:"0"}},  series:[  { dataField: "budget" , showLabels:True, displayText: "Budget"},  { dataField: "expenditure" , showLabels:True, displayText: "Expenditure"},  ]  }  ];
  $("#portfolioAnalysisC").jqxChart(portfolioAnalysisC_settings);
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }



function BudgetPerPortfolio() {
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Working on it...");
 var  sqlList;
 sqlList = [];
  pqry = "SELECT PortfolioName, SUM(budget) AS Budget FROM Projects GROUP BY PortfolioName ORDER BY Budget DESC;";
  sqlList[0] = [pqry, BudgetPerPortfolioH, ProjectsPerYearEndE];
  Sql(dbObj, sqlList);
}

function BudgetPerPortfolioH(transaction, results) { savethefunction_rvar="";
 var  row, i, sPortfolioName, sBudget, chartRow, chartData;
  chartData = [];
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sPortfolioName = row["PortfolioName"];
    sBudget = row["Budget"];
    sBudget = parseFloat(sBudget) / 1000000;
    sBudget = Round(sBudget,0);
    if(IsNull(sPortfolioName) == True ) { sPortfolioName = "Unknown"; }
    if(IsNull(sBudget) == True ) { sBudget = 0; }
    chartRow = {}
    chartRow["portfolio"] = sPortfolioName;
    chartRow["budget"] = sBudget;
    chartData[i] = chartRow;
  }
  portfolioAnalysisC_settings.showBorderLine = True;
  portfolioAnalysisC_settings.source = chartData;
  portfolioAnalysisC_settings.showLegend = False;
  portfolioAnalysisC_settings.categoryAxis={dataField:"portfolio" , showGridLines:True, textRotationAngle:-90}
  portfolioAnalysisC_settings.seriesGroups = [  {  type: "column" ,  valueAxis:  {description: "Budget (000,000)" , formatSettings: {thousandsSeparator: "," , decimalPlaces:"0"}},  series:[  { dataField: "budget" , showLabels:True, displayText: "Budget"},  ]  }  ];
  $("#portfolioAnalysisC").jqxChart(portfolioAnalysisC_settings);
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function ProjectsPerPortfolioAndProjectStage() {
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Working on it...");
 var  sqlList;
 sqlList = [];
  pqry = "SELECT PortfolioName,StageName, COUNT(Id) AS Records FROM Projects GROUP BY PortfolioName, StageName;";
  sqlList[0] = [pqry, ProjectsPerPortfolioAndProjectStageH, ProjectsPerYearEndE];
  Sql(dbObj, sqlList);
}

function ProjectsPerPortfolioAndProjectStageH(transaction, results) { savethefunction_rvar="";
 var  row, i, sPortfolioName, sStageName, sRecords, chartRow, chartData;
 var  sStages, skey, allportfolios, allstages, spportfolios, spstages, pcnt, ptot, scnt, stot;
 // build the data to plot first, step 1
  allportfolios = "";
  allstages = "";
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sPortfolioName = row["PortfolioName"];
    sStageName = row["StageName"];
    if(IsNull(sPortfolioName) == True ) { sPortfolioName = "Unknown"; }
    if(IsNull(sStageName) == True ) { sStageName = "Unknown"; }
    if(InStr(allportfolios,sPortfolioName) == 0 ) { allportfolios = allportfolios  +  sPortfolioName  +  VM; }
    if(InStr(allstages,sStageName) == 0 ) { allstages = allstages  +  sStageName  +  VM; }
  }
  allportfolios = Left(allportfolios, Len(allportfolios) - 1);
  allstages = Left(allstages, Len(allstages) - 1);
 // define the structure
  spportfolios = Split(allportfolios, VM);
  spstages = Split(allstages, VM);
  ptot = spportfolios.length - 1;
  stot = spstages.length - 1;
  for   (pcnt = 0; pcnt  <= ptot; pcnt ++) {
    for   (scnt = 0; scnt  <= stot; scnt ++) {
      skey = spportfolios[pcnt]  +  "*"  +  spstages[scnt];
      localStorage.setItem(skey, 0);
    }
  }
 //localStorage.setItem("allportfolios", allportfolios)
 //localStorage.setItem("allstages", allstages)
 // build the data to plot first, step 2
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sPortfolioName = row["PortfolioName"];
    sStageName = row["StageName"];
    sRecords = row["Records"];
    if(IsNull(sPortfolioName) == True ) { sPortfolioName = "Unknown"; }
    if(IsNull(sStageName) == True ) { sStageName = "Unknown"; }
    if(IsNull(sRecords) == True ) { sRecords = 0; }
    skey = sPortfolioName  +  "*"  +  sStageName;
    localStorage.setItem(skey,sRecords);
  }
 //define the chart data
  chartData = [];
  spportfolios = Split(allportfolios, VM);
  spstages = Split(allstages, VM);
  ptot = spportfolios.length - 1;
  stot = spstages.length - 1;
  for   (pcnt = 0; pcnt  <= ptot; pcnt ++) {
    sPortfolioName = spportfolios[pcnt];
    chartRow = {}
    chartRow["portfolio"] = sPortfolioName;
    for   (scnt = 0; scnt  <= stot; scnt ++) {
      sStageName = spstages[scnt];
      skey = sPortfolioName  +  "*"  +  sStageName;
      sRecords = localStorage.getItem(skey);
      chartRow[sStageName] = sRecords;
    }
    chartData[pcnt] = chartRow;
  }
 // build the series
 var  sSeries;
 sSeries = [];
 var  sSeriesE;
  spstages = Split(allstages, VM);
  stot = spstages.length - 1;
  for   (scnt = 0; scnt  <= stot; scnt ++) {
    sStageName = spstages[scnt];
    sSeriesE = {}
    sSeriesE["dataField"] = sStageName;
    sSeriesE["showLabels"] = False;
    sSeriesE["displayText"] = sStageName;
    sSeries[scnt] = sSeriesE;
  }
 // set the chart

  portfolioAnalysisC_settings.showBorderLine = True;
  portfolioAnalysisC_settings.source = chartData;
  portfolioAnalysisC_settings.showLegend = True;
  portfolioAnalysisC_settings.categoryAxis={dataField:"portfolio" , showGridLines:True, textRotationAngle:-90}
  portfolioAnalysisC_settings.seriesGroups = [  {  type: "column" ,  valueAxis: {description: "Projects" , unitInterval: 5},  series: sSeries,  }  ];
  $("#portfolioAnalysisC").jqxChart(portfolioAnalysisC_settings);
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function ProjectsPerPortfolio() {
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Working on it...");
 var  sqlList;
 sqlList = [];
  pqry = "SELECT PortfolioName AS FinishYear, COUNT(Id) AS Records FROM Projects GROUP BY FinishYear ORDER BY Records DESC;";
 //console.log(pqry)
  sqlList[0] = [pqry, ProjectsPerYearEndH, ProjectsPerYearEndE];
  Sql(dbObj, sqlList);
}

function ProjectsPerMonthEnd() {
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Working on it...");
 var  sqlList;
 sqlList = [];
  pqry = "SELECT strftime('%Y-%m', PlannedEnd) AS FinishYear, COUNT(ID) AS Records FROM Projects GROUP BY FinishYear;";
 //console.log(pqry)
  sqlList[0] = [pqry, ProjectsPerYearEndH, ProjectsPerYearEndE];
  Sql(dbObj, sqlList);
}


function ProjectsPerYearEnd() {
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Working on it...");
 var  sqlList;
 sqlList = [];
  pqry = "SELECT strftime('%Y', PlannedEnd) AS FinishYear, COUNT(ID) AS Records FROM Projects GROUP BY FinishYear;";
 //console.log(pqry)
  sqlList[0] = [pqry, ProjectsPerYearEndH, ProjectsPerYearEndE];
  Sql(dbObj, sqlList);
}

function ProjectsPerYearEndE(transaction, results) { savethefunction_rvar="";
  NSB.ShowProgress(False);
  NSB.MsgBox("SQL Error: "  +  results.code  +  ": "  +  results.message);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function ProjectsPerYearEndH(transaction, results) { savethefunction_rvar="";
 var  row, i, sFinishYear, sRecords, chartRow, chartData;
  chartData = [];
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sFinishYear = row["FinishYear"];
    sRecords = row["Records"];
    if(IsNull(sFinishYear) == True ) { sFinishYear = "Unknown"; }
    if(IsNull(sRecords) == True ) { sRecords = 0; }
    chartRow = {}
    chartRow["finishyear"] = sFinishYear;
    chartRow["records"] = sRecords;
    chartData[i] = chartRow;
  }
  portfolioAnalysisC_settings.showBorderLine = True;
  portfolioAnalysisC_settings.source = chartData;
  portfolioAnalysisC_settings.showLegend = False;
  portfolioAnalysisC_settings.categoryAxis={dataField:"finishyear" , showGridLines:True, textRotationAngle:-90}
  portfolioAnalysisC_settings.seriesGroups = [  {  type: "column" ,  valueAxis:  {description: "Projects" , unitInterval: 5},  series:[  { dataField: "records" , showLabels:True, displayText: "Records"},  ]  }  ];
  $("#portfolioAnalysisC").jqxChart(portfolioAnalysisC_settings);
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

portfolioAnalysisT.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Back"):
    ChangeForm(frmAnalysis);
  }
return savethefunction_rvar; }

frmPortfolioAnalysis.onshow = function() { savethefunction_rvar="";
  LoadPortfolioAnalysis();
return savethefunction_rvar; }

window.addEventListener('load', function() {
  frmClusterAnalysis.style.display = 'block';
  NSB.List_jqm_init('clusterAnalysisL','',true,'400',false);
  clusterAnalysisL_ref = new iScroll('clusterAnalysisL_scroller',{ bounce:true, zoom:false });
  clusterAnalysisL.refresh=function(){if (typeof clusterAnalysisL_ref!='undefined') setTimeout(NSB.refresh,100,clusterAnalysisL_ref)};
  NSB.addProperties(clusterAnalysisL, clusterAnalysisL_scroller);

(function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('clusterAnalysisL_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
  NSB.addProperties(clusterAnalysisT);
  NSB.addDisableProperty(clusterAnalysisT);


  if(typeof(clusterAnalysisT.onclick)=='function'){
    if(typeof(clusterAnalysisT_left)!='undefined') clusterAnalysisT_left.onclick=function() {clusterAnalysisT.onclick(clusterAnalysisT_left.getAttribute('nsbvalue'))};
    if(typeof(clusterAnalysisT_right)!='undefined') clusterAnalysisT_right.onclick=function() {clusterAnalysisT.onclick(clusterAnalysisT_right.getAttribute('nsbvalue'))}};
clusterAnalysisC_settings={'title':'', 'background':'white',
'description':'', 'padding':{ left: 10, top: 10, right: 10, bottom: 10 }, 'titlePadding':{ left: 2, top: 2, right: 2, bottom: 2 },
'colorScheme':'scheme01', 'showLegend':'true', 'enabled':'true',
'showToolTips':'true', 'toolTipDelay':'500' }
clusterAnalysisC.style.position='relative';
NSB.addProperties(clusterAnalysisC,clusterAnalysisC_wrapper);
  frmClusterAnalysis.style.display = 'none';
}, false);
frmClusterAnalysis.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(frmClusterAnalysis);
var  pqry;

function LoadClusterAnalysis() { savethefunction_rvar="";
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Loading...");
  clusterAnalysisL.Top = clusterAnalysisT.Height;
  clusterAnalysisC.Top = clusterAnalysisT.Height;
  clusterAnalysisL.Height = frmClusterAnalysis.Height - clusterAnalysisT.Height;
  clusterAnalysisC.Height = frmClusterAnalysis.Height - clusterAnalysisT.Height;
  clusterAnalysisL.Width = 400;
  clusterAnalysisC.Left = 401;
  clusterAnalysisC.Width = frmClusterAnalysis.Width - 401;
  InitializeList(clusterAnalysisL,"Cluster Timelines,Projects per Cluster" ,"," ,True);
  InitializeList(clusterAnalysisL,"Projects per Cluster & Project Stage,Budget per Cluster" ,"," ,False);
  InitializeList(clusterAnalysisL,"Jobs Created per Cluster,Financials per Cluster,Progress per Cluster,Funding Status per Cluster" ,"," ,False);
  document.body.style.cursor = 'default';
  NSB.ShowProgress(False);
}

clusterAnalysisL.onclick = function(i) { savethefunction_rvar="";
  if(TypeName(i) == "object" )  { return savethefunction_rvar; }
 var  strItem;
  strItem = clusterAnalysisL.getItem(i);
 //console.log(strItem)
  $("#clusterAnalysisT h1").text("SAFIRI Mobile Project.Show > Cluster Analysis > "  +  strItem);
  switch (True) {
  case ((strItem) == "Cluster Timelines"):
    ClusterTimelines();
	break;
  case ((strItem) == "Projects per Cluster"):
    ProjectsPerCluster();
	break;
  case ((strItem) == "Projects per Cluster & Project Stage"):
    ProjectsPerClusterAndProjectStage();
	break;
  case ((strItem) == "Budget per Cluster"):
    BudgetPerCluster();
	break;
  case ((strItem) == "Jobs Created per Cluster"):
	break;
  case ((strItem) == "Financials per Cluster"):
    FinancialsPerCluster();
	break;
  case ((strItem) == "Progress per Cluster"):
    ProgressPerCluster();
	break;
  case ((strItem) == "Funding Status per Cluster"):
    FundingStatusPerCluster();
  }
return savethefunction_rvar; }

function FundingStatusPerCluster() {
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Working on it...");
 var  sqlList;
 sqlList = [];
  pqry = "select WorkstreamName,categoryaliasname,sum(budget) as budget from projects group by WorkstreamName,categoryaliasname order by budget desc;";
  sqlList[0] = [pqry, FundingStatusPerClusterH, ProjectsPerYearEndE];
  Sql(dbObj, sqlList);
}

function FundingStatusPerClusterH(transaction, results) { savethefunction_rvar="";
 var  row, i, sPortfolioName, sStageName, sRecords, chartRow, chartData;
 var  sStages, skey, allportfolios, allstages, spportfolios, spstages, pcnt, ptot, scnt, stot;
 // build the data to plot first, step 1
  allportfolios = "";
  allstages = "";
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sPortfolioName = row["WorkstreamName"];
    sStageName = row["CategoryAliasName"];
    if(IsNull(sPortfolioName) == True ) { sPortfolioName = "Unknown"; }
    if(IsNull(sStageName) == True ) { sStageName = "Unknown"; }
    if(InStr(allportfolios,sPortfolioName) == 0 ) { allportfolios = allportfolios  +  sPortfolioName  +  VM; }
    if(InStr(allstages,sStageName) == 0 ) { allstages = allstages  +  sStageName  +  VM; }
  }
  allportfolios = Left(allportfolios, Len(allportfolios) - 1);
  allstages = Left(allstages, Len(allstages) - 1);
 // define the structure
  spportfolios = Split(allportfolios, VM);
  spstages = Split(allstages, VM);
  ptot = spportfolios.length - 1;
  stot = spstages.length - 1;
  for   (pcnt = 0; pcnt  <= ptot; pcnt ++) {
    for   (scnt = 0; scnt  <= stot; scnt ++) {
      skey = spportfolios[pcnt]  +  "*"  +  spstages[scnt];
      localStorage.setItem(skey, 0);
    }
  }
 // build the data to plot first, step 2
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sPortfolioName = row["WorkstreamName"];
    sStageName = row["CategoryAliasName"];
    sRecords = row["budget"];
    if(IsNull(sPortfolioName) == True ) { sPortfolioName = "Unknown"; }
    if(IsNull(sStageName) == True ) { sStageName = "Unknown"; }
    if(IsNull(sRecords) == True ) { sRecords = 0; }
    sRecords = parseFloat(sRecords) / 1000000;
    sRecords = Round(sRecords,0);
    skey = sPortfolioName  +  "*"  +  sStageName;
    localStorage.setItem(skey,sRecords);
  }
 //define the chart data
  chartData = [];
  spportfolios = Split(allportfolios, VM);
  spstages = Split(allstages, VM);
  ptot = spportfolios.length - 1;
  stot = spstages.length - 1;
  for   (pcnt = 0; pcnt  <= ptot; pcnt ++) {
    sPortfolioName = spportfolios[pcnt];
    chartRow = {}
    chartRow["portfolio"] = sPortfolioName;
    for   (scnt = 0; scnt  <= stot; scnt ++) {
      sStageName = spstages[scnt];
      skey = sPortfolioName  +  "*"  +  sStageName;
      sRecords = localStorage.getItem(skey);
      chartRow[sStageName] = sRecords;
    }
    chartData[pcnt] = chartRow;
  }
 // build the series
 var  sSeries;
 sSeries = [];
 var  sSeriesE;
  spstages = Split(allstages, VM);
  stot = spstages.length - 1;
  for   (scnt = 0; scnt  <= stot; scnt ++) {
    sStageName = spstages[scnt];
    sSeriesE = {}
    sSeriesE["dataField"] = sStageName;
    sSeriesE["showLabels"] = False;
    sSeriesE["displayText"] = sStageName;
    sSeries[scnt] = sSeriesE;
  }
 // set the chart

  clusterAnalysisC_settings.showBorderLine = True;
  clusterAnalysisC_settings.source = chartData;
  clusterAnalysisC_settings.showLegend = True;
  clusterAnalysisC_settings.categoryAxis={dataField:"portfolio" , showGridLines:True, textRotationAngle:-90}
  clusterAnalysisC_settings.seriesGroups = [  {  type: "stackedcolumn" ,  valueAxis: {description: "Budget (000,000)" , formatSettings: {thousandsSeparator: "," , decimalPlaces:"0"}},  series: sSeries,  }  ];
  $("#clusterAnalysisC").jqxChart(clusterAnalysisC_settings);
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function BudgetPerCluster() {
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Working on it...");
 var  sqlList;
 sqlList = [];
  pqry = "SELECT WorkstreamName, SUM(budget) AS Budget FROM Projects GROUP BY WorkstreamName ORDER BY Budget DESC;";
  sqlList[0] = [pqry, BudgetPerClusterH, ProjectsPerYearEndE];
  Sql(dbObj, sqlList);
}

function BudgetPerClusterH(transaction, results) { savethefunction_rvar="";
 var  row, i, sPortfolioName, sBudget, chartRow, chartData;
  chartData = [];
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sPortfolioName = row["WorkstreamName"];
    sBudget = row["Budget"];
    sBudget = parseFloat(sBudget) / 1000000;
    sBudget = Round(sBudget,0);
    if(IsNull(sPortfolioName) == True ) { sPortfolioName = "Unknown"; }
    if(IsNull(sBudget) == True ) { sBudget = 0; }
    chartRow = {}
    chartRow["portfolio"] = sPortfolioName;
    chartRow["budget"] = sBudget;
    chartData[i] = chartRow;
  }
  clusterAnalysisC_settings.showBorderLine = True;
  clusterAnalysisC_settings.source = chartData;
  clusterAnalysisC_settings.showLegend = False;
  clusterAnalysisC_settings.categoryAxis={dataField:"portfolio" , showGridLines:True, textRotationAngle:-90}
  clusterAnalysisC_settings.seriesGroups = [  {  type: "column" ,  valueAxis:  {description: "Budget (000,000)" , formatSettings: {thousandsSeparator: "," , decimalPlaces:"0"}},  series:[  { dataField: "budget" , showLabels:False, displayText: "Budget"},  ]  }  ];
  $("#clusterAnalysisC").jqxChart(clusterAnalysisC_settings);
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function ClusterTimelines() {
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Working on it...");
 var  sqlList;
 sqlList = [];
  pqry = "SELECT Description,strftime('%Y', PlannedStart) AS StartYear, strftime('%Y', PlannedEnd) AS FinishYear FROM Workstream WHERE StartYear > 0 ORDER BY StartYear;";
 //console.log(pqry)
  sqlList[0] = [pqry, ClusterTimelinesH, ProjectsPerYearEndE];
  Sql(dbObj, sqlList);
}

function ClusterTimelinesH(transaction, results) { savethefunction_rvar="";
 var  row, i, sdescription, sStartYear, sFinishYear, chartRow, chartData;
 // get max and min values
 var  smin, smax;
  row = results.rows.item(0);
  smin = _jsCint(row["StartYear"]);
  smax = _jsCint(row["FinishYear"]);
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sStartYear = row["StartYear"];
    if(IsNull(sStartYear) == True ) { sStartYear = "0"; }
    sFinishYear = row["FinishYear"];
    if(IsNull(sFinishYear) == True ) { sFinishYear = "0"; }
    if(_jsCint(sStartYear) < _jsCint(smin) ) { smin = sStartYear; }
    if(_jsCint(sFinishYear) > _jsCint(smax) ) { smax = sFinishYear; }
  }
  chartData = [];
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sdescription = row["Description"];
    if(IsNull(sdescription) == True ) { sdescription = "Unknown"; }
    sStartYear = row["StartYear"];
    if(IsNull(sStartYear) == True ) { sStartYear = "0"; }
    sFinishYear = row["FinishYear"];
    if(IsNull(sFinishYear) == True ) { sFinishYear = "0"; }
    chartRow = {}
    chartRow["portfolio"] = sdescription;
    chartRow["startyear"] = sStartYear;
    chartRow["finishyear"] = sFinishYear;
    chartData[i] = chartRow;
  }
  clusterAnalysisC_settings.showBorderLine = True;
  clusterAnalysisC_settings.source = chartData;
  clusterAnalysisC_settings.showLegend = False;
  clusterAnalysisC_settings.categoryAxis={dataField:"portfolio" , showTickMarks: True,  showGridLines:True, tickMarksInterval: 1, unitInterval: 1, textRotationAngle:90}
  clusterAnalysisC_settings.colorScheme = "scheme01";
  clusterAnalysisC_settings.seriesGroups = [  {  type: "rangecolumn" , orientation: "horizontal" , columnsGapPercent: 100,  valueAxis:  {displayValueAxis: True,  unitInterval: 5,  flip: True,  description: "Year" ,  minValue: smin,  axisSize: "auto" ,  },  series:[  { dataFieldFrom: "startyear" , dataFieldTo: "finishyear" , opacity: 1, showLabels:True, displayText: "Cluster"},  ]  }  ];
  $("#clusterAnalysisC").jqxChart(clusterAnalysisC_settings);
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

clusterAnalysisT.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Back"):
    ChangeForm(frmAnalysis);
  }
return savethefunction_rvar; }

frmClusterAnalysis.onshow = function() { savethefunction_rvar="";
  LoadClusterAnalysis();
return savethefunction_rvar; }

function ProjectsPerCluster() {
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Working on it...");
 var  sqlList;
 sqlList = [];
  pqry = "SELECT WorkstreamName, COUNT(Id) AS Records FROM Projects GROUP BY WorkstreamName ORDER BY Records DESC;";
 //console.log(pqry)
  sqlList[0] = [pqry, ProjectsPerClusterH, ProjectsPerYearEndE];
  Sql(dbObj, sqlList);
}

function ProjectsPerClusterH(transaction, results) { savethefunction_rvar="";
 var  row, i, sWorkstreamName, sRecords, chartRow, chartData;
  chartData = [];
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sWorkstreamName = row["WorkstreamName"];
    sRecords = row["Records"];
    if(IsNull(sWorkstreamName) == True ) { sWorkstreamName = "Unknown"; }
    if(IsNull(sRecords) == True ) { sRecords = 0; }
    chartRow = {}
    chartRow["cluster"] = sWorkstreamName;
    chartRow["records"] = sRecords;
    chartData[i] = chartRow;
  }
  clusterAnalysisC_settings.showBorderLine = True;
  clusterAnalysisC_settings.source = chartData;
  clusterAnalysisC_settings.showLegend = False;
  clusterAnalysisC_settings.categoryAxis={dataField:"cluster" , showGridLines:True, textRotationAngle:-90}
  clusterAnalysisC_settings.seriesGroups = [  {  type: "column" ,  valueAxis:  {description: "Projects" , unitInterval: 5},  series:[  { dataField: "records" , showLabels:True, displayText: "Records"},  ]  }  ];
  $("#clusterAnalysisC").jqxChart(clusterAnalysisC_settings);
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function ProjectsPerClusterAndProjectStage() {
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Working on it...");
 var  sqlList;
 sqlList = [];
  pqry = "SELECT WorkstreamName,StageName, COUNT(Id) AS Records FROM Projects GROUP BY WorkstreamName, StageName;";
  sqlList[0] = [pqry, ProjectsPerClusterAndProjectStageH, ProjectsPerYearEndE];
  Sql(dbObj, sqlList);
}

function ProjectsPerClusterAndProjectStageH(transaction, results) { savethefunction_rvar="";
 var  row, i, sWorkstreamName, sStageName, sRecords, chartRow, chartData;
 var  sStages, skey, allportfolios, allstages, spportfolios, spstages, pcnt, ptot, scnt, stot;
 // build the data to plot first, step 1
  allportfolios = "";
  allstages = "";
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sWorkstreamName = row["WorkstreamName"];
    sStageName = row["StageName"];
    if(IsNull(sWorkstreamName) == True ) { sWorkstreamName = "Unknown"; }
    if(IsNull(sStageName) == True ) { sStageName = "Unknown"; }
    if(InStr(allportfolios,sWorkstreamName) == 0 ) { allportfolios = allportfolios  +  sWorkstreamName  +  VM; }
    if(InStr(allstages,sStageName) == 0 ) { allstages = allstages  +  sStageName  +  VM; }
  }
  allportfolios = Left(allportfolios, Len(allportfolios) - 1);
  allstages = Left(allstages, Len(allstages) - 1);
 // define the structure
  spportfolios = Split(allportfolios, VM);
  spstages = Split(allstages, VM);
  ptot = spportfolios.length - 1;
  stot = spstages.length - 1;
  for   (pcnt = 0; pcnt  <= ptot; pcnt ++) {
    for   (scnt = 0; scnt  <= stot; scnt ++) {
      skey = spportfolios[pcnt]  +  "*"  +  spstages[scnt];
      localStorage.setItem(skey, 0);
    }
  }
 // build the data to plot first, step 2
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sWorkstreamName = row["WorkstreamName"];
    sStageName = row["StageName"];
    sRecords = row["Records"];
    if(IsNull(sWorkstreamName) == True ) { sWorkstreamName = "Unknown"; }
    if(IsNull(sStageName) == True ) { sStageName = "Unknown"; }
    if(IsNull(sRecords) == True ) { sRecords = 0; }
    skey = sWorkstreamName  +  "*"  +  sStageName;
    localStorage.setItem(skey,sRecords);
  }
 //define the chart data
  chartData = [];
  spportfolios = Split(allportfolios, VM);
  spstages = Split(allstages, VM);
  ptot = spportfolios.length - 1;
  stot = spstages.length - 1;
  for   (pcnt = 0; pcnt  <= ptot; pcnt ++) {
    sWorkstreamName = spportfolios[pcnt];
    chartRow = {}
    chartRow["portfolio"] = sWorkstreamName;
    for   (scnt = 0; scnt  <= stot; scnt ++) {
      sStageName = spstages[scnt];
      skey = sWorkstreamName  +  "*"  +  sStageName;
      sRecords = localStorage.getItem(skey);
      chartRow[sStageName] = sRecords;
    }
    chartData[pcnt] = chartRow;
  }
 // build the series
 var  sSeries;
 sSeries = [];
 var  sSeriesE;
  spstages = Split(allstages, VM);
  stot = spstages.length - 1;
  for   (scnt = 0; scnt  <= stot; scnt ++) {
    sStageName = spstages[scnt];
    sSeriesE = {}
    sSeriesE["dataField"] = sStageName;
    sSeriesE["showLabels"] = False;
    sSeriesE["displayText"] = sStageName;
    sSeries[scnt] = sSeriesE;
  }
 // set the chart

  clusterAnalysisC_settings.showBorderLine = True;
  clusterAnalysisC_settings.source = chartData;
  clusterAnalysisC_settings.showLegend = True;
  clusterAnalysisC_settings.categoryAxis={dataField:"portfolio" , showGridLines:True, textRotationAngle:-90}
  clusterAnalysisC_settings.seriesGroups = [  {  type: "column" ,  valueAxis: {description: "Projects" , unitInterval: 5},  series: sSeries,  }  ];
  $("#clusterAnalysisC").jqxChart(clusterAnalysisC_settings);
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }


function FinancialsPerCluster() {
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Working on it...");
 var  sqlList;
 sqlList = [];
  pqry = "SELECT WorkstreamName, SUM(Budget) AS Budget, SUM(Expenditure) AS Expenditure FROM Projects GROUP BY WorkstreamName ORDER BY Budget DESC;";
  sqlList[0] = [pqry, FinancialsPerClusterH, ProjectsPerYearEndE];
  Sql(dbObj, sqlList);
}

function FinancialsPerClusterH(transaction, results) { savethefunction_rvar="";
 var  row, i, sPortfolioName, sBudget, sExpenditure, chartRow, chartData;
  chartData = [];
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sPortfolioName = row["WorkstreamName"];
    if(IsNull(sPortfolioName) == True ) { sPortfolioName = "Unknown"; }
    sBudget = row["Budget"];
    if(IsNull(sBudget) == True ) { sBudget = 0; }
    sBudget = parseFloat(sBudget) / 1000000;
    sBudget = Round(sBudget,0);
    sExpenditure = row["Expenditure"];
    if(IsNull(sExpenditure) == True ) { sExpenditure = 0; }
    sExpenditure = parseFloat(sExpenditure) / 1000000;
    sExpenditure = Round(sExpenditure,0);
    chartRow = {}
    chartRow["portfolio"] = sPortfolioName;
    chartRow["budget"] = sBudget;
    chartRow["expenditure"] = sExpenditure;
    chartData[i] = chartRow;
  }
  clusterAnalysisC_settings.showBorderLine = True;
  clusterAnalysisC_settings.source = chartData;
  clusterAnalysisC_settings.showLegend = True;
  clusterAnalysisC_settings.categoryAxis={dataField:"portfolio" , showGridLines:True, textRotationAngle:-90}
  clusterAnalysisC_settings.seriesGroups = [  {  type: "column" ,  valueAxis:  {description: "Financials (000,000)" , formatSettings: {thousandsSeparator: "," , decimalPlaces:"0"}},  series:[  { dataField: "budget" , showLabels:False, displayText: "Budget"},  { dataField: "expenditure" , showLabels:False, displayText: "Expenditure"},  ]  }  ];
  $("#clusterAnalysisC").jqxChart(clusterAnalysisC_settings);
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function ProgressPerCluster() {
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Working on it...");
 var  sqlList;
 sqlList = [];
  pqry = "select Description, ExpectedProgress, PercentageProgress, PlannedProgress from Workstream;";
  sqlList[0] = [pqry, ProgressPerClusterH, ProjectsPerYearEndE];
  Sql(dbObj, sqlList);
}

function ProgressPerClusterH(transaction, results) { savethefunction_rvar="";
 var  row, i, sactual, sdescription, sexpected, splanned, chartRow, chartData;
  chartData = [];
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sdescription = row["Description"];
    if(IsNull(sdescription) == True ) { sdescription = "Unknown"; }
    sexpected = row["ExpectedProgress"];
    if(IsNull(sexpected) == True ) { sexpected = "0"; }
    sactual = row["PercentageProgress"];
    if(IsNull(sactual) == True ) { sactual = "0"; }
    splanned = row["PlannedProgress"];
    if(IsNull(splanned) == True ) { splanned = "0"; }
    chartRow = {}
    chartRow["portfolio"] = sdescription;
    chartRow["expected"] = sexpected;
    chartRow["actual"] = sactual;
    chartRow["planned"] = splanned;
    chartData[i] = chartRow;
  }
  clusterAnalysisC_settings.showBorderLine = True;
  clusterAnalysisC_settings.source = chartData;
  clusterAnalysisC_settings.showLegend = True;
  clusterAnalysisC_settings.categoryAxis={dataField:"portfolio" , showGridLines:True, textRotationAngle:-90}
  clusterAnalysisC_settings.seriesGroups = [  {  type: "column" ,  valueAxis:  {description: "Percentages" , unitInterval: 5, formatSettings: {sufix:"%" ,decimalPlaces:"0"}},  series:[  { dataField: "expected" , showLabels:False, displayText: "Expected"},  { dataField: "actual" , showLabels:False, displayText: "Actual"},  { dataField: "planned" , showLabels:False, displayText: "Planned"},  ]  }  ];
  $("#clusterAnalysisC").jqxChart(clusterAnalysisC_settings);
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }



window.addEventListener('load', function() {
  frmClusterAnalysisS.style.display = 'block';
  NSB.List_jqm_init('clusterAnalysisLS','',true,'394',false);
  clusterAnalysisLS_ref = new iScroll('clusterAnalysisLS_scroller',{ bounce:true, zoom:false });
  clusterAnalysisLS.refresh=function(){if (typeof clusterAnalysisLS_ref!='undefined') setTimeout(NSB.refresh,100,clusterAnalysisLS_ref)};
  NSB.addProperties(clusterAnalysisLS, clusterAnalysisLS_scroller);

(function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('clusterAnalysisLS_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
  NSB.addProperties(clusterAnalysisTS);
  NSB.addDisableProperty(clusterAnalysisTS);


  if(typeof(clusterAnalysisTS.onclick)=='function'){
    if(typeof(clusterAnalysisTS_left)!='undefined') clusterAnalysisTS_left.onclick=function() {clusterAnalysisTS.onclick(clusterAnalysisTS_left.getAttribute('nsbvalue'))};
    if(typeof(clusterAnalysisTS_right)!='undefined') clusterAnalysisTS_right.onclick=function() {clusterAnalysisTS.onclick(clusterAnalysisTS_right.getAttribute('nsbvalue'))}};
clusterAnalysisCS_settings={'title':'', 'background':'white',
'description':'', 'padding':{ left: 10, top: 10, right: 10, bottom: 10 }, 'titlePadding':{ left: 2, top: 2, right: 2, bottom: 2 },
'colorScheme':'scheme01', 'showLegend':'true', 'enabled':'true',
'showToolTips':'true', 'toolTipDelay':'500' }
clusterAnalysisCS.style.position='relative';
NSB.addProperties(clusterAnalysisCS,clusterAnalysisCS_wrapper);


  NSB.MultiInput_init('MultiInput4');

  NSB.addProperties(MultiInput4);
  delete cboClusterPortfolio.childNodes[0];
  NSB.ComboBox_init('cboClusterPortfolio');
  NSB.addProperties(cboClusterPortfolio);
  frmClusterAnalysisS.style.display = 'none';
}, false);
frmClusterAnalysisS.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(frmClusterAnalysisS);
var  pqry, selectedPortfolio;

function LoadClusterAnalysisS() { savethefunction_rvar="";
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Loading...");
  cboClusterPortfolio.clear();
  cboClusterPortfolio.addItem("" ,"");
  cboClusterPortfolio.setIndex(0);
  clusterAnalysisCS.Top = clusterAnalysisTS.Height;
  clusterAnalysisLS.Height = frmClusterAnalysisS.Height - 92;
  clusterAnalysisCS.Height = frmClusterAnalysisS.Height - clusterAnalysisTS.Height;
  clusterAnalysisCS.Left = 405;
  clusterAnalysisCS.Width = frmClusterAnalysisS.Width - 405;
  InitializeList(clusterAnalysisLS,"Projects per Year End,Projects per Month End,Cluster Timelines,Projects per Cluster" ,"," ,True);
  InitializeList(clusterAnalysisLS,"Financials,Project Stage,Progress,Funding Status,Projects per Cluster & Project Stage,Budget per Cluster" ,"," ,False);
  InitializeList(clusterAnalysisLS,"Jobs Created per Cluster,Financials per Cluster,Progress per Cluster,Funding Status per Cluster" ,"," ,False);
 var  sqlList;
 sqlList = [];
  pqry = "SELECT Description FROM Portfolio ORDER BY Description;";
  sqlList[0] = [pqry, ListLoader];
  Sql(dbObj, sqlList);
}

function ListLoader(transaction, results) { savethefunction_rvar="";
 var  row, i, sdescription;
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sdescription = row["Description"];
    cboClusterPortfolio.addItem(sdescription,sdescription);
  }
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

clusterAnalysisLS.onclick = function(i) { savethefunction_rvar="";
  if(TypeName(i) == "object" )  { return savethefunction_rvar; }
 var  strItem;
  strItem = clusterAnalysisLS.getItem(i);
 //console.log(strItem)
  selectedPortfolio = cboClusterPortfolio.selectedItem();
  if(Len(selectedPortfolio)==0) {
    NSB.MsgBox("You need to select a portfolio to process first!");
    cboClusterPortfolio.focus();
     return;
  }
  $("#clusterAnalysisTS h1").text("SAFIRI Mobile Project.Show > "  +  selectedPortfolio  +  " > "  +  strItem);
  switch (True) {
  case ((strItem) == "Financials"):
    PortfolioFinancialsS();
	break;
  case ((strItem) == "Project Stage"):
    ProjectsPerPortfolioAndProjectStageS();
	break;
  case ((strItem) == "Progress"):
    ProgressPerPortfolioS();
	break;
  case ((strItem) == "Funding Status"):
    FundingStatusPerPortfolioS();
	break;
  case ((strItem) == "Projects per Year End"):
    ProjectsPerYearEndS();
	break;
  case ((strItem) == "Projects per Month End"):
    ProjectsPerMonthEndS();
	break;
  case ((strItem) == "Cluster Timelines"):
    ClusterTimelinesS();
	break;
  case ((strItem) == "Projects per Cluster"):
    ProjectsPerClusterS();
	break;
  case ((strItem) == "Projects per Cluster & Project Stage"):
    ProjectsPerClusterAndProjectStageS();
	break;
  case ((strItem) == "Budget per Cluster"):
    BudgetPerClusterS();
	break;
  case ((strItem) == "Jobs Created per Cluster"):
	break;
  case ((strItem) == "Financials per Cluster"):
    FinancialsPerClusterS();
	break;
  case ((strItem) == "Progress per Cluster"):
    ProgressPerClusterS();
	break;
  case ((strItem) == "Funding Status per Cluster"):
    FundingStatusPerClusterS();
  }
return savethefunction_rvar; }

function FundingStatusPerPortfolioS() {
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Working on it...");
 var  sqlList;
 sqlList = [];
  pqry = "select portfolioname,categoryaliasname,sum(budget) as budget from projects WHERE PortfolioName = '"  +  selectedPortfolio  +  "' group by portfolioname,categoryaliasname order by budget desc;";
  sqlList[0] = [pqry, FundingStatusPerPortfolioHS, ProjectsPerYearEndE];
  Sql(dbObj, sqlList);
}

function FundingStatusPerPortfolioHS(transaction, results) { savethefunction_rvar="";
 var  row, i, sPortfolioName, sStageName, sRecords, chartRow, chartData;
 var  sStages, skey, allportfolios, allstages, spportfolios, spstages, pcnt, ptot, scnt, stot;
 // build the data to plot first, step 1
  allportfolios = "";
  allstages = "";
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sPortfolioName = row["PortfolioName"];
    sStageName = row["CategoryAliasName"];
    if(IsNull(sPortfolioName) == True ) { sPortfolioName = "Unknown"; }
    if(IsNull(sStageName) == True ) { sStageName = "Unknown"; }
    if(InStr(allportfolios,sPortfolioName) == 0 ) { allportfolios = allportfolios  +  sPortfolioName  +  VM; }
    if(InStr(allstages,sStageName) == 0 ) { allstages = allstages  +  sStageName  +  VM; }
  }
  allportfolios = Left(allportfolios, Len(allportfolios) - 1);
  allstages = Left(allstages, Len(allstages) - 1);
 // define the structure
  spportfolios = Split(allportfolios, VM);
  spstages = Split(allstages, VM);
  ptot = spportfolios.length - 1;
  stot = spstages.length - 1;
  for   (pcnt = 0; pcnt  <= ptot; pcnt ++) {
    for   (scnt = 0; scnt  <= stot; scnt ++) {
      skey = spportfolios[pcnt]  +  "*"  +  spstages[scnt];
      localStorage.setItem(skey, 0);
    }
  }
 // build the data to plot first, step 2
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sPortfolioName = row["PortfolioName"];
    sStageName = row["CategoryAliasName"];
    sRecords = row["budget"];
    if(IsNull(sPortfolioName) == True ) { sPortfolioName = "Unknown"; }
    if(IsNull(sStageName) == True ) { sStageName = "Unknown"; }
    if(IsNull(sRecords) == True ) { sRecords = 0; }
    sRecords = parseFloat(sRecords) / 1000000;
    sRecords = Round(sRecords,0);
    skey = sPortfolioName  +  "*"  +  sStageName;
    localStorage.setItem(skey,sRecords);
  }
 //define the chart data
  chartData = [];
  spportfolios = Split(allportfolios, VM);
  spstages = Split(allstages, VM);
  ptot = spportfolios.length - 1;
  stot = spstages.length - 1;
  sPortfolioName = spportfolios[0];
  for   (scnt = 0; scnt  <= stot; scnt ++) {
    sStageName = spstages[scnt];
    skey = sPortfolioName  +  "*"  +  sStageName;
    sRecords = localStorage.getItem(skey);
    chartRow = {}
    chartRow["status"] = sStageName;
    chartRow["budget"] = sRecords;
    chartData[scnt] = chartRow;
  }
 // set the chart
  clusterAnalysisCS_settings.showBorderLine = True;
  clusterAnalysisCS_settings.source = chartData;
  clusterAnalysisCS_settings.showLegend = True;
  clusterAnalysisCS_settings.seriesGroups = [  {  type: "pie" , showLabels: True,  series:[ { dataField: "budget" ,  displayText: "status" ,  formatSettings: {sufix: " (M)" , thousandsSeparator: "," , decimalPlaces:"0"},  labelRadius: 100, initialAngle: 15, centerOffset: 0}],  }  ];
  $("#clusterAnalysisCS").jqxChart(clusterAnalysisCS_settings);
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }


function ProgressPerPortfolioS() {
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Working on it...");
 var  sqlList;
 sqlList = [];
  pqry = "select Description, ExpectedProgress, ActualProgress, PlannedProgress from portfolio WHERE Description = '"  +  selectedPortfolio  +  "';";
  sqlList[0] = [pqry, ProgressPerPortfolioHS, ProjectsPerYearEndE];
  Sql(dbObj, sqlList);
}


function ProgressPerPortfolioHS(transaction, results) { savethefunction_rvar="";
 var  row, i, sactual, sdescription, sexpected, splanned, chartRow, chartData;
  chartData = [];
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sdescription = row["Description"];
    if(IsNull(sdescription) == True ) { sdescription = "Unknown"; }
    sexpected = row["ExpectedProgress"];
    if(IsNull(sexpected) == True ) { sexpected = "0"; }
    sactual = row["ActualProgress"];
    if(IsNull(sactual) == True ) { sactual = "0"; }
    splanned = row["PlannedProgress"];
    if(IsNull(splanned) == True ) { splanned = "0"; }
    chartRow = {}
    chartRow["portfolio"] = sdescription;
    chartRow["expected"] = sexpected;
    chartRow["actual"] = sactual;
    chartRow["planned"] = splanned;
    chartData[i] = chartRow;
  }
  clusterAnalysisCS_settings.showBorderLine = True;
  clusterAnalysisCS_settings.source = chartData;
  clusterAnalysisCS_settings.showLegend = True;
  clusterAnalysisCS_settings.categoryAxis={dataField:"portfolio" , showGridLines:True}
  clusterAnalysisCS_settings.seriesGroups = [  {  type: "column" ,  valueAxis:  {description: "Percentages" , unitInterval: 5, formatSettings: {sufix:"%" ,decimalPlaces:"0"}},  series:[  { dataField: "expected" , showLabels:True, displayText: "Expected"},  { dataField: "actual" , showLabels:True, displayText: "Actual"},  { dataField: "planned" , showLabels:True, displayText: "Planned"},  ]  }  ];
  $("#clusterAnalysisCS").jqxChart(clusterAnalysisCS_settings);
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function ProjectsPerPortfolioAndProjectStageS() {
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Working on it...");
 var  sqlList;
 sqlList = [];
  pqry = "SELECT PortfolioName,StageName, COUNT(Id) AS Records FROM Projects WHERE PortfolioName = '"  +  selectedPortfolio  +  "' GROUP BY PortfolioName, StageName;";
  sqlList[0] = [pqry, ProjectsPerPortfolioAndProjectStageHS, ProjectsPerYearEndE];
  Sql(dbObj, sqlList);
}

function ProjectsPerPortfolioAndProjectStageHS(transaction, results) { savethefunction_rvar="";
 var  row, i, sPortfolioName, sStageName, sRecords, chartRow, chartData;
 var  sStages, skey, allportfolios, allstages, spportfolios, spstages, pcnt, ptot, scnt, stot;
 // build the data to plot first, step 1
  allportfolios = "";
  allstages = "";
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sPortfolioName = row["PortfolioName"];
    sStageName = row["StageName"];
    if(IsNull(sPortfolioName) == True ) { sPortfolioName = "Unknown"; }
    if(IsNull(sStageName) == True ) { sStageName = "Unknown"; }
    if(InStr(allportfolios,sPortfolioName) == 0 ) { allportfolios = allportfolios  +  sPortfolioName  +  VM; }
    if(InStr(allstages,sStageName) == 0 ) { allstages = allstages  +  sStageName  +  VM; }
  }
  allportfolios = Left(allportfolios, Len(allportfolios) - 1);
  allstages = Left(allstages, Len(allstages) - 1);
 // define the structure
  spportfolios = Split(allportfolios, VM);
  spstages = Split(allstages, VM);
  ptot = spportfolios.length - 1;
  stot = spstages.length - 1;
  for   (pcnt = 0; pcnt  <= ptot; pcnt ++) {
    for   (scnt = 0; scnt  <= stot; scnt ++) {
      skey = spportfolios[pcnt]  +  "*"  +  spstages[scnt];
      localStorage.setItem(skey, 0);
    }
  }
 // build the data to plot first, step 2
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sPortfolioName = row["PortfolioName"];
    sStageName = row["StageName"];
    sRecords = row["Records"];
    if(IsNull(sPortfolioName) == True ) { sPortfolioName = "Unknown"; }
    if(IsNull(sStageName) == True ) { sStageName = "Unknown"; }
    if(IsNull(sRecords) == True ) { sRecords = 0; }
    skey = sPortfolioName  +  "*"  +  sStageName;
    localStorage.setItem(skey,sRecords);
  }
 //define the chart data
  chartData = [];
  spportfolios = Split(allportfolios, VM);
  spstages = Split(allstages, VM);
  ptot = spportfolios.length - 1;
  stot = spstages.length - 1;
 // there is just 1 portfolio
  sPortfolioName = spportfolios[0];
  for   (scnt = 0; scnt  <= stot; scnt ++) {
    sStageName = spstages[scnt];
    skey = sPortfolioName  +  "*"  +  sStageName;
    sRecords = localStorage.getItem(skey);
    chartRow = {}
    chartRow["stage"] = sStageName;
    chartRow["projects"] = sRecords;
    chartData[scnt] = chartRow;
  }
 // set the chart
  clusterAnalysisCS_settings.showBorderLine = True;
  clusterAnalysisCS_settings.source = chartData;
  clusterAnalysisCS_settings.showLegend = True;
  clusterAnalysisCS_settings.seriesGroups = [  {  type: "pie" , showLabels: True,  series:[ { dataField: "projects" , displayText: "stage" , labelRadius: 100, initialAngle: 15, centerOffset: 0},  ],  }  ];
  $("#clusterAnalysisCS").jqxChart(clusterAnalysisCS_settings);
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function PortfolioFinancialsS() {
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Working on it...");
 var  sqlList;
 sqlList = [];
  pqry = "SELECT PortfolioName, SUM(Budget) AS Budget, SUM(Expenditure) AS Expenditure FROM Projects WHERE PortfolioName = '"  +  selectedPortfolio  +  "' GROUP BY PortfolioName ORDER BY Budget DESC;";
  sqlList[0] = [pqry, PortfolioFinancialsSS, ProjectsPerYearEndE];
  Sql(dbObj, sqlList);
}

function PortfolioFinancialsSS(transaction, results) { savethefunction_rvar="";
 var  row, i, sPortfolioName, sBudget, sExpenditure, chartRow, chartData;
  chartData = [];
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sPortfolioName = row["PortfolioName"];
    if(IsNull(sPortfolioName) == True ) { sPortfolioName = "Unknown"; }
    sBudget = row["Budget"];
    if(IsNull(sBudget) == True ) { sBudget = 0; }
    sBudget = parseFloat(sBudget) / 1000000;
    sBudget = Round(sBudget,0);
    sExpenditure = row["Expenditure"];
    if(IsNull(sExpenditure) == True ) { sExpenditure = 0; }
    sExpenditure = parseFloat(sExpenditure) / 1000000;
    sExpenditure = Round(sExpenditure,0);
    chartRow = {}
    chartRow["portfolio"] = sPortfolioName;
    chartRow["budget"] = sBudget;
    chartRow["expenditure"] = sExpenditure;
    chartData[i] = chartRow;
  }
  clusterAnalysisCS_settings.showBorderLine = True;
  clusterAnalysisCS_settings.source = chartData;
  clusterAnalysisCS_settings.showLegend = True;
  clusterAnalysisCS_settings.categoryAxis={dataField:"portfolio" , showGridLines:True}
  clusterAnalysisCS_settings.seriesGroups = [  {  type: "column" ,  valueAxis:  {description: "Financials (000,000)" , formatSettings: {thousandsSeparator: "," , decimalPlaces:"0"}},  series:[  { dataField: "budget" , showLabels:True, displayText: "Budget"},  { dataField: "expenditure" , showLabels:True, displayText: "Expenditure"},  ]  }  ];
  $("#clusterAnalysisCS").jqxChart(clusterAnalysisCS_settings);
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function ProjectsPerMonthEndS() {
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Working on it...");
 var  sqlList;
 sqlList = [];
  pqry = "SELECT strftime('%Y-%m', PlannedEnd) AS FinishYear, COUNT(ID) AS Records FROM Projects WHERE PortfolioName = '"  +  selectedPortfolio  +  "' GROUP BY FinishYear;";
 //console.log(pqry)
  sqlList[0] = [pqry, ProjectsPerYearEndHS, ProjectsPerYearEndE];
  Sql(dbObj, sqlList);
}


function ProjectsPerYearEndS() {
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Working on it...");
 var  sqlList;
 sqlList = [];
  pqry = "SELECT strftime('%Y', PlannedEnd) AS FinishYear, COUNT(ID) AS Records FROM Projects WHERE PortfolioName = '"  +  selectedPortfolio  +  "' GROUP BY FinishYear;";
 //console.log(pqry)
  sqlList[0] = [pqry, ProjectsPerYearEndHS, ProjectsPerYearEndE];
  Sql(dbObj, sqlList);
}

function ProjectsPerYearEndHS(transaction, results) { savethefunction_rvar="";
 var  row, i, sFinishYear, sRecords, chartRow, chartData;
  chartData = [];
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sFinishYear = row["FinishYear"];
    sRecords = row["Records"];
    if(IsNull(sFinishYear) == True ) { sFinishYear = "Unknown"; }
    if(IsNull(sRecords) == True ) { sRecords = 0; }
    chartRow = {}
    chartRow["finishyear"] = sFinishYear;
    chartRow["records"] = sRecords;
    chartData[i] = chartRow;
  }
  clusterAnalysisCS_settings.showBorderLine = True;
  clusterAnalysisCS_settings.source = chartData;
  clusterAnalysisCS_settings.showLegend = False;
  clusterAnalysisCS_settings.categoryAxis={dataField:"finishyear" , showGridLines:True, textRotationAngle:-90}
  clusterAnalysisCS_settings.seriesGroups = [  {  type: "column" ,  valueAxis:  {description: "Projects" , unitInterval: 5},  series:[  { dataField: "records" , showLabels:True, displayText: "Records"},  ]  }  ];
  $("#clusterAnalysisCS").jqxChart(clusterAnalysisCS_settings);
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function FundingStatusPerClusterS() {
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Working on it...");
 var  sqlList;
 sqlList = [];
  pqry = "select WorkstreamName,categoryaliasname,sum(budget) as budget from projects WHERE PortfolioName = '"  +  selectedPortfolio  +  "' group by WorkstreamName,categoryaliasname order by budget desc;";
  sqlList[0] = [pqry, FundingStatusPerClusterHS, ProjectsPerYearEndE];
  Sql(dbObj, sqlList);
}

function FundingStatusPerClusterHS(transaction, results) { savethefunction_rvar="";
 var  row, i, sPortfolioName, sStageName, sRecords, chartRow, chartData;
 var  sStages, skey, allportfolios, allstages, spportfolios, spstages, pcnt, ptot, scnt, stot;
 // build the data to plot first, step 1
  allportfolios = "";
  allstages = "";
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sPortfolioName = row["WorkstreamName"];
    sStageName = row["CategoryAliasName"];
    if(IsNull(sPortfolioName) == True ) { sPortfolioName = "Unknown"; }
    if(IsNull(sStageName) == True ) { sStageName = "Unknown"; }
    if(InStr(allportfolios,sPortfolioName) == 0 ) { allportfolios = allportfolios  +  sPortfolioName  +  VM; }
    if(InStr(allstages,sStageName) == 0 ) { allstages = allstages  +  sStageName  +  VM; }
  }
  allportfolios = Left(allportfolios, Len(allportfolios) - 1);
  allstages = Left(allstages, Len(allstages) - 1);
 // define the structure
  spportfolios = Split(allportfolios, VM);
  spstages = Split(allstages, VM);
  ptot = spportfolios.length - 1;
  stot = spstages.length - 1;
  for   (pcnt = 0; pcnt  <= ptot; pcnt ++) {
    for   (scnt = 0; scnt  <= stot; scnt ++) {
      skey = spportfolios[pcnt]  +  "*"  +  spstages[scnt];
      localStorage.setItem(skey, 0);
    }
  }
 // build the data to plot first, step 2
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sPortfolioName = row["WorkstreamName"];
    sStageName = row["CategoryAliasName"];
    sRecords = row["budget"];
    if(IsNull(sPortfolioName) == True ) { sPortfolioName = "Unknown"; }
    if(IsNull(sStageName) == True ) { sStageName = "Unknown"; }
    if(IsNull(sRecords) == True ) { sRecords = 0; }
    sRecords = parseFloat(sRecords) / 1000000;
    sRecords = Round(sRecords,0);
    skey = sPortfolioName  +  "*"  +  sStageName;
    localStorage.setItem(skey,sRecords);
  }
 //define the chart data
  chartData = [];
  spportfolios = Split(allportfolios, VM);
  spstages = Split(allstages, VM);
  ptot = spportfolios.length - 1;
  stot = spstages.length - 1;
  for   (pcnt = 0; pcnt  <= ptot; pcnt ++) {
    sPortfolioName = spportfolios[pcnt];
    chartRow = {}
    chartRow["portfolio"] = sPortfolioName;
    for   (scnt = 0; scnt  <= stot; scnt ++) {
      sStageName = spstages[scnt];
      skey = sPortfolioName  +  "*"  +  sStageName;
      sRecords = localStorage.getItem(skey);
      chartRow[sStageName] = sRecords;
    }
    chartData[pcnt] = chartRow;
  }
 // build the series
 var  sSeries;
 sSeries = [];
 var  sSeriesE;
  spstages = Split(allstages, VM);
  stot = spstages.length - 1;
  for   (scnt = 0; scnt  <= stot; scnt ++) {
    sStageName = spstages[scnt];
    sSeriesE = {}
    sSeriesE["dataField"] = sStageName;
    sSeriesE["showLabels"] = False;
    sSeriesE["displayText"] = sStageName;
    sSeries[scnt] = sSeriesE;
  }
 // set the chart

  clusterAnalysisCS_settings.showBorderLine = True;
  clusterAnalysisCS_settings.source = chartData;
  clusterAnalysisCS_settings.showLegend = True;
  clusterAnalysisCS_settings.categoryAxis={dataField:"portfolio" , showGridLines:True, textRotationAngle:-90}
  clusterAnalysisCS_settings.seriesGroups = [  {  type: "stackedcolumn" ,  valueAxis: {description: "Budget (000,000)" , formatSettings: {thousandsSeparator: "," , decimalPlaces:"0"}},  series: sSeries,  }  ];
  $("#clusterAnalysisCS").jqxChart(clusterAnalysisCS_settings);
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function BudgetPerClusterS() {
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Working on it...");
 var  sqlList;
 sqlList = [];
  pqry = "SELECT WorkstreamName, SUM(budget) AS Budget FROM Projects WHERE PortfolioName = '"  +  selectedPortfolio  +  "' GROUP BY WorkstreamName ORDER BY Budget DESC;";
  sqlList[0] = [pqry, BudgetPerClusterHS, ProjectsPerYearEndE];
  Sql(dbObj, sqlList);
}

function BudgetPerClusterHS(transaction, results) { savethefunction_rvar="";
 var  row, i, sPortfolioName, sBudget, chartRow, chartData;
  chartData = [];
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sPortfolioName = row["WorkstreamName"];
    sBudget = row["Budget"];
    sBudget = parseFloat(sBudget) / 1000000;
    sBudget = Round(sBudget,0);
    if(IsNull(sPortfolioName) == True ) { sPortfolioName = "Unknown"; }
    if(IsNull(sBudget) == True ) { sBudget = 0; }
    chartRow = {}
    chartRow["portfolio"] = sPortfolioName;
    chartRow["budget"] = sBudget;
    chartData[i] = chartRow;
  }
  clusterAnalysisCS_settings.showBorderLine = True;
  clusterAnalysisCS_settings.source = chartData;
  clusterAnalysisCS_settings.showLegend = False;
  clusterAnalysisCS_settings.categoryAxis={dataField:"portfolio" , showGridLines:True, textRotationAngle:-90}
  clusterAnalysisCS_settings.seriesGroups = [  {  type: "column" ,  valueAxis:  {description: "Budget (000,000)" , formatSettings: {thousandsSeparator: "," , decimalPlaces:"0"}},  series:[  { dataField: "budget" , showLabels:False, displayText: "Budget"},  ]  }  ];
  $("#clusterAnalysisCS").jqxChart(clusterAnalysisCS_settings);
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function ClusterTimelinesS() {
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Working on it...");
 var  sqlList;
 sqlList = [];
  pqry = "SELECT Description,strftime('%Y', PlannedStart) AS StartYear, strftime('%Y', PlannedEnd) AS FinishYear FROM Workstream WHERE StartYear > 0 AND PortfolioName = '"  +  selectedPortfolio  +  "' ORDER BY StartYear;";
 //console.log(pqry)
  sqlList[0] = [pqry, ClusterTimelinesHS, ProjectsPerYearEndE];
  Sql(dbObj, sqlList);
}

function ClusterTimelinesHS(transaction, results) { savethefunction_rvar="";
 var  row, i, sdescription, sStartYear, sFinishYear, chartRow, chartData;
 // get max and min values
 var  smin, smax;
  row = results.rows.item(0);
  smin = _jsCint(row["StartYear"]);
  smax = _jsCint(row["FinishYear"]);
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sStartYear = row["StartYear"];
    if(IsNull(sStartYear) == True ) { sStartYear = "0"; }
    sFinishYear = row["FinishYear"];
    if(IsNull(sFinishYear) == True ) { sFinishYear = "0"; }
    if(_jsCint(sStartYear) < _jsCint(smin) ) { smin = sStartYear; }
    if(_jsCint(sFinishYear) > _jsCint(smax) ) { smax = sFinishYear; }
  }
  chartData = [];
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sdescription = row["Description"];
    if(IsNull(sdescription) == True ) { sdescription = "Unknown"; }
    sStartYear = row["StartYear"];
    if(IsNull(sStartYear) == True ) { sStartYear = "0"; }
    sFinishYear = row["FinishYear"];
    if(IsNull(sFinishYear) == True ) { sFinishYear = "0"; }
    chartRow = {}
    chartRow["portfolio"] = sdescription;
    chartRow["startyear"] = sStartYear;
    chartRow["finishyear"] = sFinishYear;
    chartData[i] = chartRow;
  }
  clusterAnalysisCS_settings.showBorderLine = True;
  clusterAnalysisCS_settings.source = chartData;
  clusterAnalysisCS_settings.showLegend = False;
  clusterAnalysisCS_settings.categoryAxis={dataField:"portfolio" , showTickMarks: True,  showGridLines:True, tickMarksInterval: 1, unitInterval: 1, textRotationAngle:90}
  clusterAnalysisCS_settings.colorScheme = "scheme01";
  clusterAnalysisCS_settings.seriesGroups = [  {  type: "rangecolumn" , orientation: "horizontal" , columnsGapPercent: 100,  valueAxis:  {displayValueAxis: True,  unitInterval: 5,  flip: True,  description: "Year" ,  minValue: smin,  axisSize: "auto" ,  },  series:[  { dataFieldFrom: "startyear" , dataFieldTo: "finishyear" , opacity: 1, showLabels:True, displayText: "Cluster"},  ]  }  ];
  $("#clusterAnalysisCS").jqxChart(clusterAnalysisCS_settings);
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

clusterAnalysisTS.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Back"):
    ChangeForm(frmPortfolioAnalysis);
  }
return savethefunction_rvar; }

frmClusterAnalysisS.onshow = function() { savethefunction_rvar="";
  LoadClusterAnalysisS();
 //console.log(cboClusterPortfolio.innerHTML)
return savethefunction_rvar; }

function ProjectsPerClusterS() {
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Working on it...");
 var  sqlList;
 sqlList = [];
  pqry = "SELECT WorkstreamName, COUNT(Id) AS Records FROM Projects WHERE PortfolioName = '"  +  selectedPortfolio  +  "' GROUP BY WorkstreamName ORDER BY Records DESC;";
 //console.log(pqry)
  sqlList[0] = [pqry, ProjectsPerClusterHS, ProjectsPerYearEndE];
  Sql(dbObj, sqlList);
}

function ProjectsPerClusterHS(transaction, results) { savethefunction_rvar="";
 var  row, i, sWorkstreamName, sRecords, chartRow, chartData;
  chartData = [];
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sWorkstreamName = row["WorkstreamName"];
    sRecords = row["Records"];
    if(IsNull(sWorkstreamName) == True ) { sWorkstreamName = "Unknown"; }
    if(IsNull(sRecords) == True ) { sRecords = 0; }
    chartRow = {}
    chartRow["cluster"] = sWorkstreamName;
    chartRow["records"] = sRecords;
    chartData[i] = chartRow;
  }
  clusterAnalysisCS_settings.showBorderLine = True;
  clusterAnalysisCS_settings.source = chartData;
  clusterAnalysisCS_settings.showLegend = False;
  clusterAnalysisCS_settings.categoryAxis={dataField:"cluster" , showGridLines:True, textRotationAngle:-90}
  clusterAnalysisCS_settings.seriesGroups = [  {  type: "column" ,  valueAxis:  {description: "Projects" , unitInterval: 5},  series:[  { dataField: "records" , showLabels:True, displayText: "Records"},  ]  }  ];
  $("#clusterAnalysisCS").jqxChart(clusterAnalysisCS_settings);
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function ProjectsPerClusterAndProjectStageS() {
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Working on it...");
 var  sqlList;
 sqlList = [];
  pqry = "SELECT WorkstreamName,StageName, COUNT(Id) AS Records FROM Projects WHERE PortfolioName = '"  +  selectedPortfolio  +  "' GROUP BY WorkstreamName, StageName;";
  sqlList[0] = [pqry, ProjectsPerClusterAndProjectStageHS, ProjectsPerYearEndE];
  Sql(dbObj, sqlList);
}

function ProjectsPerClusterAndProjectStageHS(transaction, results) { savethefunction_rvar="";
 var  row, i, sWorkstreamName, sStageName, sRecords, chartRow, chartData;
 var  sStages, skey, allportfolios, allstages, spportfolios, spstages, pcnt, ptot, scnt, stot;
 // build the data to plot first, step 1
  allportfolios = "";
  allstages = "";
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sWorkstreamName = row["WorkstreamName"];
    sStageName = row["StageName"];
    if(IsNull(sWorkstreamName) == True ) { sWorkstreamName = "Unknown"; }
    if(IsNull(sStageName) == True ) { sStageName = "Unknown"; }
    if(InStr(allportfolios,sWorkstreamName) == 0 ) { allportfolios = allportfolios  +  sWorkstreamName  +  VM; }
    if(InStr(allstages,sStageName) == 0 ) { allstages = allstages  +  sStageName  +  VM; }
  }
  allportfolios = Left(allportfolios, Len(allportfolios) - 1);
  allstages = Left(allstages, Len(allstages) - 1);
 // define the structure
  spportfolios = Split(allportfolios, VM);
  spstages = Split(allstages, VM);
  ptot = spportfolios.length - 1;
  stot = spstages.length - 1;
  for   (pcnt = 0; pcnt  <= ptot; pcnt ++) {
    for   (scnt = 0; scnt  <= stot; scnt ++) {
      skey = spportfolios[pcnt]  +  "*"  +  spstages[scnt];
      localStorage.setItem(skey, 0);
    }
  }
 // build the data to plot first, step 2
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sWorkstreamName = row["WorkstreamName"];
    sStageName = row["StageName"];
    sRecords = row["Records"];
    if(IsNull(sWorkstreamName) == True ) { sWorkstreamName = "Unknown"; }
    if(IsNull(sStageName) == True ) { sStageName = "Unknown"; }
    if(IsNull(sRecords) == True ) { sRecords = 0; }
    skey = sWorkstreamName  +  "*"  +  sStageName;
    localStorage.setItem(skey,sRecords);
  }
 //define the chart data
  chartData = [];
  spportfolios = Split(allportfolios, VM);
  spstages = Split(allstages, VM);
  ptot = spportfolios.length - 1;
  stot = spstages.length - 1;
  for   (pcnt = 0; pcnt  <= ptot; pcnt ++) {
    sWorkstreamName = spportfolios[pcnt];
    chartRow = {}
    chartRow["portfolio"] = sWorkstreamName;
    for   (scnt = 0; scnt  <= stot; scnt ++) {
      sStageName = spstages[scnt];
      skey = sWorkstreamName  +  "*"  +  sStageName;
      sRecords = localStorage.getItem(skey);
      chartRow[sStageName] = sRecords;
    }
    chartData[pcnt] = chartRow;
  }
 // build the series
 var  sSeries;
 sSeries = [];
 var  sSeriesE;
  spstages = Split(allstages, VM);
  stot = spstages.length - 1;
  for   (scnt = 0; scnt  <= stot; scnt ++) {
    sStageName = spstages[scnt];
    sSeriesE = {}
    sSeriesE["dataField"] = sStageName;
    sSeriesE["showLabels"] = False;
    sSeriesE["displayText"] = sStageName;
    sSeries[scnt] = sSeriesE;
  }
 // set the chart

  clusterAnalysisCS_settings.showBorderLine = True;
  clusterAnalysisCS_settings.source = chartData;
  clusterAnalysisCS_settings.showLegend = True;
  clusterAnalysisCS_settings.categoryAxis={dataField:"portfolio" , showGridLines:True, textRotationAngle:-90}
  clusterAnalysisCS_settings.seriesGroups = [  {  type: "column" ,  valueAxis: {description: "Projects" , unitInterval: 5},  series: sSeries,  }  ];
  $("#clusterAnalysisCS").jqxChart(clusterAnalysisCS_settings);
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }


function FinancialsPerClusterS() {
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Working on it...");
 var  sqlList;
 sqlList = [];
  pqry = "SELECT WorkstreamName, SUM(Budget) AS Budget, SUM(Expenditure) AS Expenditure FROM Projects WHERE PortfolioName = '"  +  selectedPortfolio  +  "' GROUP BY WorkstreamName ORDER BY Budget DESC;";
  sqlList[0] = [pqry, FinancialsPerClusterHS, ProjectsPerYearEndE];
  Sql(dbObj, sqlList);
}

function FinancialsPerClusterHS(transaction, results) { savethefunction_rvar="";
 var  row, i, sPortfolioName, sBudget, sExpenditure, chartRow, chartData;
  chartData = [];
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sPortfolioName = row["WorkstreamName"];
    if(IsNull(sPortfolioName) == True ) { sPortfolioName = "Unknown"; }
    sBudget = row["Budget"];
    if(IsNull(sBudget) == True ) { sBudget = 0; }
    sBudget = parseFloat(sBudget) / 1000000;
    sBudget = Round(sBudget,0);
    sExpenditure = row["Expenditure"];
    if(IsNull(sExpenditure) == True ) { sExpenditure = 0; }
    sExpenditure = parseFloat(sExpenditure) / 1000000;
    sExpenditure = Round(sExpenditure,0);
    chartRow = {}
    chartRow["portfolio"] = sPortfolioName;
    chartRow["budget"] = sBudget;
    chartRow["expenditure"] = sExpenditure;
    chartData[i] = chartRow;
  }
  clusterAnalysisCS_settings.showBorderLine = True;
  clusterAnalysisCS_settings.source = chartData;
  clusterAnalysisCS_settings.showLegend = True;
  clusterAnalysisCS_settings.categoryAxis={dataField:"portfolio" , showGridLines:True, textRotationAngle:-90}
  clusterAnalysisCS_settings.seriesGroups = [  {  type: "column" ,  valueAxis:  {description: "Financials (000,000)" , formatSettings: {thousandsSeparator: "," , decimalPlaces:"0"}},  series:[  { dataField: "budget" , showLabels:False, displayText: "Budget"},  { dataField: "expenditure" , showLabels:False, displayText: "Expenditure"},  ]  }  ];
  $("#clusterAnalysisCS").jqxChart(clusterAnalysisCS_settings);
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function ProgressPerClusterS() {
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Working on it...");
 var  sqlList;
 sqlList = [];
  pqry = "select Description, ExpectedProgress, PercentageProgress, PlannedProgress from Workstream WHERE PortfolioName = '"  +  selectedPortfolio  +  "';";
  sqlList[0] = [pqry, ProgressPerClusterHS, ProjectsPerYearEndE];
  Sql(dbObj, sqlList);
}

function ProgressPerClusterHS(transaction, results) { savethefunction_rvar="";
 var  row, i, sactual, sdescription, sexpected, splanned, chartRow, chartData;
  chartData = [];
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sdescription = row["Description"];
    if(IsNull(sdescription) == True ) { sdescription = "Unknown"; }
    sexpected = row["ExpectedProgress"];
    if(IsNull(sexpected) == True ) { sexpected = "0"; }
    sactual = row["PercentageProgress"];
    if(IsNull(sactual) == True ) { sactual = "0"; }
    splanned = row["PlannedProgress"];
    if(IsNull(splanned) == True ) { splanned = "0"; }
    chartRow = {}
    chartRow["portfolio"] = sdescription;
    chartRow["expected"] = sexpected;
    chartRow["actual"] = sactual;
    chartRow["planned"] = splanned;
    chartData[i] = chartRow;
  }
  clusterAnalysisCS_settings.showBorderLine = True;
  clusterAnalysisCS_settings.source = chartData;
  clusterAnalysisCS_settings.showLegend = True;
  clusterAnalysisCS_settings.categoryAxis={dataField:"portfolio" , showGridLines:True, textRotationAngle:-90}
  clusterAnalysisCS_settings.seriesGroups = [  {  type: "column" ,  valueAxis:  {description: "Percentages" , unitInterval: 5, formatSettings: {sufix:"%" , decimalPlaces:"0"}},  series:[  { dataField: "expected" , showLabels:False, displayText: "Expected"},  { dataField: "actual" , showLabels:False, displayText: "Actual"},  { dataField: "planned" , showLabels:False, displayText: "Planned"},  ]  }  ];
  $("#clusterAnalysisCS").jqxChart(clusterAnalysisCS_settings);
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }



window.addEventListener('load', function() {
  frmCategoryAnalysis.style.display = 'block';
  NSB.List_jqm_init('categoryAnalysisL','',true,'400',false);
  categoryAnalysisL_ref = new iScroll('categoryAnalysisL_scroller',{ bounce:true, zoom:false });
  categoryAnalysisL.refresh=function(){if (typeof categoryAnalysisL_ref!='undefined') setTimeout(NSB.refresh,100,categoryAnalysisL_ref)};
  NSB.addProperties(categoryAnalysisL, categoryAnalysisL_scroller);

(function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('categoryAnalysisL_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
  NSB.addProperties(categoryAnalysisT);
  NSB.addDisableProperty(categoryAnalysisT);


  if(typeof(categoryAnalysisT.onclick)=='function'){
    if(typeof(categoryAnalysisT_left)!='undefined') categoryAnalysisT_left.onclick=function() {categoryAnalysisT.onclick(categoryAnalysisT_left.getAttribute('nsbvalue'))};
    if(typeof(categoryAnalysisT_right)!='undefined') categoryAnalysisT_right.onclick=function() {categoryAnalysisT.onclick(categoryAnalysisT_right.getAttribute('nsbvalue'))}};
categoryAnalysisC_settings={'title':'', 'background':'white',
'description':'', 'padding':{ left: 10, top: 10, right: 10, bottom: 10 }, 'titlePadding':{ left: 2, top: 2, right: 2, bottom: 2 },
'colorScheme':'scheme01', 'showLegend':'true', 'enabled':'true',
'showToolTips':'true', 'toolTipDelay':'500' }
categoryAnalysisC.style.position='relative';
NSB.addProperties(categoryAnalysisC,categoryAnalysisC_wrapper);
  frmCategoryAnalysis.style.display = 'none';
}, false);
frmCategoryAnalysis.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(frmCategoryAnalysis);
var  pqry;

function LoadCategoryAnalysis() { savethefunction_rvar="";
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Loading...");
  categoryAnalysisL.Top = categoryAnalysisT.Height;
  categoryAnalysisC.Top = categoryAnalysisT.Height;
  categoryAnalysisL.Height = frmCategoryAnalysis.Height - categoryAnalysisT.Height;
  categoryAnalysisC.Height = frmCategoryAnalysis.Height - categoryAnalysisT.Height;
  categoryAnalysisL.Width = 400;
  categoryAnalysisC.Left = 401;
  categoryAnalysisC.Width = frmCategoryAnalysis.Width - 401;
  InitializeList(categoryAnalysisL,"Budget per Category,Implementation Progress,Projects per Category & Project Stage" ,"," ,True);
  document.body.style.cursor = 'default';
  NSB.ShowProgress(False);
}

categoryAnalysisL.onclick = function(i) { savethefunction_rvar="";
  if(TypeName(i) == "object" )  { return savethefunction_rvar; }
 var  strItem;
  strItem = categoryAnalysisL.getItem(i);
 //console.log(strItem)
  $("#categoryAnalysisT h1").text("SAFIRI Mobile Project.Show > Category Analysis > "  +  strItem);
  switch (True) {
  case ((strItem) == "Budget per Category"):
    BudgetPerCategory();
	break;
  case ((strItem) == "Implementation Progress"):
    ImplementationProgress();
	break;
  case ((strItem) == "Projects per Category & Project Stage"):
    ProjectsPerCategoryAndProjectStage();
  }
return savethefunction_rvar; }

function ProjectsPerCategoryAndProjectStage() {
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Working on it...");
 var  sqlList;
 sqlList = [];
  pqry = "SELECT CategoryName,StageName, COUNT(Id) AS Records FROM Projects GROUP BY CategoryName, StageName;";
  sqlList[0] = [pqry, ProjectsPerCategoryAndProjectStageH, ProjectsPerYearEndE];
  Sql(dbObj, sqlList);
}

function ProjectsPerCategoryAndProjectStageH(transaction, results) { savethefunction_rvar="";
 var  row, i, sCategoryName, sStageName, sRecords, chartRow, chartData;
 var  sStages, skey, allportfolios, allstages, spportfolios, spstages, pcnt, ptot, scnt, stot;
 // build the data to plot first, step 1
  allportfolios = "";
  allstages = "";
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sCategoryName = row["CategoryName"];
    sStageName = row["StageName"];
    if(IsNull(sCategoryName) == True ) { sCategoryName = "Unknown"; }
    if(IsNull(sStageName) == True ) { sStageName = "Unknown"; }
    if(InStr(allportfolios,sCategoryName) == 0 ) { allportfolios = allportfolios  +  sCategoryName  +  VM; }
    if(InStr(allstages,sStageName) == 0 ) { allstages = allstages  +  sStageName  +  VM; }
  }
  allportfolios = Left(allportfolios, Len(allportfolios) - 1);
  allstages = Left(allstages, Len(allstages) - 1);
 // define the structure
  spportfolios = Split(allportfolios, VM);
  spstages = Split(allstages, VM);
  ptot = spportfolios.length - 1;
  stot = spstages.length - 1;
  for   (pcnt = 0; pcnt  <= ptot; pcnt ++) {
    for   (scnt = 0; scnt  <= stot; scnt ++) {
      skey = spportfolios[pcnt]  +  "*"  +  spstages[scnt];
      localStorage.setItem(skey, 0);
    }
  }
 // build the data to plot first, step 2
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sCategoryName = row["CategoryName"];
    sStageName = row["StageName"];
    sRecords = row["Records"];
    if(IsNull(sCategoryName) == True ) { sCategoryName = "Unknown"; }
    if(IsNull(sStageName) == True ) { sStageName = "Unknown"; }
    if(IsNull(sRecords) == True ) { sRecords = 0; }
    skey = sCategoryName  +  "*"  +  sStageName;
    localStorage.setItem(skey,sRecords);
  }
 //define the chart data
  chartData = [];
  spportfolios = Split(allportfolios, VM);
  spstages = Split(allstages, VM);
  ptot = spportfolios.length - 1;
  stot = spstages.length - 1;
  for   (pcnt = 0; pcnt  <= ptot; pcnt ++) {
    sCategoryName = spportfolios[pcnt];
    chartRow = {}
    chartRow["category"] = sCategoryName;
    for   (scnt = 0; scnt  <= stot; scnt ++) {
      sStageName = spstages[scnt];
      skey = sCategoryName  +  "*"  +  sStageName;
      sRecords = localStorage.getItem(skey);
      chartRow[sStageName] = sRecords;
    }
    chartData[pcnt] = chartRow;
  }
 // build the series
 var  sSeries;
 sSeries = [];
 var  sSeriesE;
  spstages = Split(allstages, VM);
  stot = spstages.length - 1;
  for   (scnt = 0; scnt  <= stot; scnt ++) {
    sStageName = spstages[scnt];
    sSeriesE = {}
    sSeriesE["dataField"] = sStageName;
    sSeriesE["showLabels"] = False;
    sSeriesE["displayText"] = sStageName;
    sSeries[scnt] = sSeriesE;
  }
 // set the chart

  categoryAnalysisC_settings.showBorderLine = True;
  categoryAnalysisC_settings.source = chartData;
  categoryAnalysisC_settings.showLegend = True;
  categoryAnalysisC_settings.categoryAxis={dataField:"category" , showGridLines:True, textRotationAngle:-90}
  categoryAnalysisC_settings.seriesGroups = [  {  type: "column" ,  valueAxis: {description: "Projects" , unitInterval: 5},  series: sSeries,  }  ];
  $("#categoryAnalysisC").jqxChart(categoryAnalysisC_settings);
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function ImplementationProgress() {
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Working on it...");
 var  sqlList;
 sqlList = [];
  pqry = "select CategoryAliasName,sum(budget) as Budget from projects group by CategoryAliasName;";
  sqlList[0] = [pqry, ImplementationProgressH, ProjectsPerYearEndE];
  Sql(dbObj, sqlList);
}

function ImplementationProgressH(transaction, results) { savethefunction_rvar="";
 var  row, i, sCategoryName, sBudget, chartRow, chartData;
  chartData = [];
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sCategoryName = row["CategoryAliasName"];
    sBudget = row["Budget"];
    if(IsNull(sCategoryName) == True ) { sCategoryName = "Unknown"; }
    if(IsNull(sBudget) == True ) { sBudget = "0"; }
    sBudget = parseFloat(sBudget) / 1000000;
    sBudget = Round(sBudget,0);
    chartRow = {}
    chartRow["category"] = sCategoryName;
    chartRow["budget"] = sBudget;
    chartData[i] = chartRow;
  }
 // set the chart
  categoryAnalysisC_settings.showBorderLine = True;
  categoryAnalysisC_settings.source = chartData;
  categoryAnalysisC_settings.showLegend = True;
  categoryAnalysisC_settings.seriesGroups = [  {  type: "pie" , showLabels: True,  series:[ { dataField: "budget" ,  displayText: "category" ,  formatSettings: {sufix: " (M)" , thousandsSeparator: "," , decimalPlaces:"0"},  labelRadius: 100, initialAngle: 15, centerOffset: 0}],  }  ];
  $("#categoryAnalysisC").jqxChart(categoryAnalysisC_settings);
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function BudgetPerCategory() {
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Working on it...");
 var  sqlList;
 sqlList = [];
  pqry = "select CategoryName,sum(budget) as Budget from projects group by CategoryName;";
  sqlList[0] = [pqry, BudgetPerCategoryH, ProjectsPerYearEndE];
  Sql(dbObj, sqlList);
}

function BudgetPerCategoryH(transaction, results) { savethefunction_rvar="";
 var  row, i, sCategoryName, sBudget, chartRow, chartData;
  chartData = [];
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sCategoryName = row["CategoryName"];
    sBudget = row["Budget"];
    if(IsNull(sCategoryName) == True ) { sCategoryName = "Unknown"; }
    if(IsNull(sBudget) == True ) { sBudget = "0"; }
    sBudget = parseFloat(sBudget) / 1000000;
    sBudget = Round(sBudget,0);
    chartRow = {}
    chartRow["category"] = sCategoryName;
    chartRow["budget"] = sBudget;
    chartData[i] = chartRow;
  }
 // set the chart
  categoryAnalysisC_settings.showBorderLine = True;
  categoryAnalysisC_settings.source = chartData;
  categoryAnalysisC_settings.showLegend = True;
  categoryAnalysisC_settings.seriesGroups = [  {  type: "pie" , showLabels: True,  series:[ { dataField: "budget" ,  displayText: "category" ,  formatSettings: {sufix: " (M)" , thousandsSeparator: "," , decimalPlaces:"0"},  labelRadius: 100, initialAngle: 15, centerOffset: 0}],  }  ];
  $("#categoryAnalysisC").jqxChart(categoryAnalysisC_settings);
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

categoryAnalysisT.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Back"):
    ChangeForm(frmAnalysis);
  }
return savethefunction_rvar; }

frmCategoryAnalysis.onshow = function() { savethefunction_rvar="";
  LoadCategoryAnalysis();
return savethefunction_rvar; }



window.addEventListener('load', function() {
  frmAbout.style.display = 'block';
  NSB.addProperties(hAbout);
  NSB.addDisableProperty(hAbout);


  if(typeof(hAbout.onclick)=='function'){
    if(typeof(hAbout_left)!='undefined') hAbout_left.onclick=function() {hAbout.onclick(hAbout_left.getAttribute('nsbvalue'))};
    if(typeof(hAbout_right)!='undefined') hAbout_right.onclick=function() {hAbout.onclick(hAbout_right.getAttribute('nsbvalue'))}};


  NSB.addProperties(Label12);


  NSB.addProperties(Label13);
  NSB.addProperties(Line1);
  frmAbout.style.display = 'none';
}, false);
frmAbout.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(frmAbout);
hAbout.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Home"):
    ChangeForm(frmMainMenu);
  }
return savethefunction_rvar; }
function AddCategory(scategory) { savethefunction_rvar="";
  scategory = InSingleQuote(scategory);
  dbRecord = new Object();
  dbRecord["CategoryName"]= scategory;
  dbRecord["Transactions"]= 0;
  InsertRecord("Categories" , dbRecord);
}

function AddCategories(scategory) { savethefunction_rvar="";
 var  spvalues;
 spvalues = Split(scategory,",");
 var  rsTot, rsCnt;
 rsTot = spvalues.length - 1;
 var  scat, dbRecord;
  ResetInsertCommands();
  for   (rsCnt = 0; rsCnt  <= rsTot; rsCnt ++) {
    scat = spvalues[rsCnt];
    scat = InSingleQuote(scat);
    dbRecord = new Object();
    dbRecord["CategoryName"]= scat;
    dbRecord["Transactions"]= 0;
    InsertRecord1("Categories" , dbRecord, rsCnt);
  }
  ExecuteInsertCommands();
}

 // generate the next available institution id result
function NewCategoryOk(transaction, results) { savethefunction_rvar="";
  recid = results.rows.item(0)["MaxValue"];
  recid = recid + 1;
 var  dbRecord;
 dbRecord = new Object();
 var  ncat;
 ncat = localStorage.getItem("newcategory");
  ncat = InSingleQuote(ncat);
  dbRecord["CategoryId"]= recid;
  dbRecord["CategoryName"]= ncat;
  dbRecord["Transactions"]= 0;
  InsertRecord("Categories" , dbRecord);
return savethefunction_rvar; }

function Category(id, categoryname, transactions) { savethefunction_rvar="";
  this.id = id;
  this.categoryname = categoryname;
  this.transactions = transactions;
return savethefunction_rvar; }

function saveCategory() { savethefunction_rvar="";
 var  s;
  sqlList = [];
  s = Join([this.id, "'"  +  this.categoryname  +  "'" , this.transactions], ",");
  sqlList[0] = ["INSERT INTO Categories (CategoryId, CategoryName, Transactions) VALUES ( "  +  s  +  ");" , saveCatOk, saveCatError];
  Sql(dbObj, sqlList);
return savethefunction_rvar; }

function saveCatOk(transaction, result) { savethefunction_rvar="";
  NSB.MsgBox("Category successfully saved.");
return savethefunction_rvar; }

function saveCatError(transaction, result) { savethefunction_rvar="";
  NSB.MsgBox("SQL Error: "  +  result.code  +  ": "  +  result.message);
return savethefunction_rvar; }

Category.prototype.save = saveCategory;

function Categories_CreateTable() {
 var  tbls;
  tbls = new Object();
  tbls["CategoryId"]= "integer";
  tbls["CategoryName"]= "text";
  tbls["Transactions"]= "integer";
  CreateTable("Categories" , tbls, "CategoryId" , "CategoryId");
  CreateTableIndexes("Categories" ,"CategoryName,Transactions");
}

function CategoryMovement_CreateTable() {
 var  tbls;
  tbls = new Object();
  tbls["Id"]= "text";
  tbls["AccountId"]= "integer";
  tbls["AccountName"]= "text";
  tbls["YearOn"]= "integer";
  tbls["TypeOf"]= "text";
  tbls["BudgetJan"]= "float";
  tbls["BudgetFeb"]= "float";
  tbls["BudgetMar"]= "float";
  tbls["BudgetApr"]= "float";
  tbls["BudgetMay"]= "float";
  tbls["BudgetJun"]= "float";
  tbls["BudgetJul"]= "float";
  tbls["BudgetAug"]= "float";
  tbls["BudgetSep"]= "float";
  tbls["ActualApr"]= "float";
  tbls["ActualMay"]= "float";
  tbls["ActualJun"]= "float";
  tbls["ActualJul"]= "float";
  tbls["ActualAug"]= "float";
  tbls["ActualSep"]= "float";
  tbls["ActualMar"]= "float";
  tbls["ActualOct"]= "float";
  tbls["ActualNov"]= "float";
  tbls["ActualDec"]= "float";
  tbls["Actual"]= "float";
  tbls["ActualFeb"]= "float";
  tbls["BudgetOct"]= "float";
  tbls["BudgetNov"]= "float";
  tbls["BudgetDec"]= "float";
  tbls["Budget"]= "float";
  tbls["ActualJan"]= "float";
  CreateTable("Category_Movement" , tbls, "Id" , "");
  CreateTableIndexes("Category_Movement" ,"AccountId,AccountName,YearOn,TypeOf,Actual,Budget");
}

function Trial_CreateTable() {
 var  tbls;
  tbls = new Object();
  tbls["IMEI"]= "text";
  tbls["Runs"]= "integer";
  CreateTable("Trial" , tbls, "IMEI" , "");
  CreateTableIndexes("Trial" , "Runs");
}
window.addEventListener('load', function() {
  Budgets.style.display = 'block';
  NSB.addProperties(budgetsTitle);
  NSB.addDisableProperty(budgetsTitle);


  if(typeof(budgetsTitle.onclick)=='function'){
    if(typeof(budgetsTitle_left)!='undefined') budgetsTitle_left.onclick=function() {budgetsTitle.onclick(budgetsTitle_left.getAttribute('nsbvalue'))};
    if(typeof(budgetsTitle_right)!='undefined') budgetsTitle_right.onclick=function() {budgetsTitle.onclick(budgetsTitle_right.getAttribute('nsbvalue'))}};
  if(typeof txtBudgetYear==='undefined')txtBudgetYear=document.getElementById('txtBudgetYear')
  txtBudgetYear.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(txtBudgetYear, $('#txtBudgetYear_wrapper > div')[0]);
  NSB.addDisableProperty(txtBudgetYear)
  delete cboBudgetAccount.childNodes[0];
  NSB.ComboBox_init('cboBudgetAccount');
  NSB.addProperties(cboBudgetAccount);


  NSB.MultiInput_init('miBudgets1');

  NSB.addProperties(miBudgets1);


  NSB.MultiInput_init('miBudgets2');

  NSB.addProperties(miBudgets2);


  NSB.MultiInput_init('budgetsInput');

  NSB.addProperties(budgetsInput);


  NSB.MultiInput_init('MultiInput3');

  NSB.addProperties(MultiInput3);
  Budgets.style.display = 'none';
}, false);
Budgets.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(Budgets);

budgetsTitle.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Back"):
    ChangeForm(MyAccounts);
	break;
  case ((choice) == "Next"):
  }
return savethefunction_rvar; }

Budgets.onshow = function() { savethefunction_rvar="";
  txtBudgetYear.style.zIndex = 1;
  cboBudgetAccount.style.zIndex = 1;
return savethefunction_rvar; }

window.addEventListener('load', function() {
  frmSignIn.style.display = 'block';
  NSB.addProperties(signInT);
  NSB.addDisableProperty(signInT);


  if(typeof(signInT.onclick)=='function'){
    if(typeof(signInT_left)!='undefined') signInT_left.onclick=function() {signInT.onclick(signInT_left.getAttribute('nsbvalue'))};
    if(typeof(signInT_right)!='undefined') signInT_right.onclick=function() {signInT.onclick(signInT_right.getAttribute('nsbvalue'))}};


  NSB.MultiInput_init('mSignIn');

  NSB.addProperties(mSignIn);
  frmSignIn.style.display = 'none';
}, false);
frmSignIn.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(frmSignIn);
var  susername, spassword;

signInT.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Sign In"):
    susername = mSignIn.getValue(1);
    susername = Trim(susername);
    if(Len(susername)== 0) {
      NSB.MsgBox("Please specify a user name!");
       return;
    }
    spassword = mSignIn.getValue(2);
    spassword = Trim(spassword);
    if(Len(susername)== 0) {
      NSB.MsgBox("Please specify a password!");
       return;
    }
 // check the user credentials
   var  sqlList;
 sqlList = [];
    query = "SELECT * FROM Users WHERE UserName = '"  +  susername  +  "' and Password = '"  +  spassword  +  "';";
    sqlList[0] = [query, CheckUser, CheckUserError];
    Sql(dbObj, sqlList);
  }
return savethefunction_rvar; }

function CheckUser(transaction, results) { savethefunction_rvar="";
 var  row, i, sPasswordExpiry, sGroupName, sFullName, sEmailAddress;
 var  sActive, sPermissions, tusers;
  tusers = results.rows.length - 1;
  if(_jsCint(tusers) == -1) {
    NSB.MsgBox("You have entered incorrect sign in details, please try again!");
     return;
  }else if (_jsCint(tusers) == 0 ) {
    row = results.rows.item(0);
    sPasswordExpiry = row["PasswordExpiry"];
    sGroupName = row["GroupName"];
    sFullName = row["FullName"];
    sEmailAddress = row["EmailAddress"];
    sActive = row["Active"];
    sPermissions = row["Permissions"];
    if(sActive == "N") {
      NSB.MsgBox("Your account is no longer active. Please contact the System Administrator!");
       return;
    }
    localStorage.setItem("email" ,sEmailAddress);
   var  sToday;
 sToday = ToDay1();
   var  sThen;
 sThen = DbDateOut1(sPasswordExpiry);
    if(_jsCint(sThen) < _jsCint(sToday)) {
 //NSB.MsgBox("Your account password has expired. Please contact the System Administrator!")
 //Exit Sub
    }
    ChangeForm(frmMainMenu);
  }
return savethefunction_rvar; }

function CheckUserError(transaction, results) { savethefunction_rvar="";
  NSB.MsgBox("SQL Error: "  +  results.code  +  ": "  +  results.message);
return savethefunction_rvar; }

frmSignIn.onshow = function() { savethefunction_rvar="";
  mSignIn.setValue(1,"");
  mSignIn.setValue(2,"");
return savethefunction_rvar; }

window.addEventListener('load', function() {
  frmRestore.style.display = 'block';
  NSB.addProperties(restoreT);
  NSB.addDisableProperty(restoreT);


  if(typeof(restoreT.onclick)=='function'){
    if(typeof(restoreT_left)!='undefined') restoreT_left.onclick=function() {restoreT.onclick(restoreT_left.getAttribute('nsbvalue'))};
    if(typeof(restoreT_right)!='undefined') restoreT_right.onclick=function() {restoreT.onclick(restoreT_right.getAttribute('nsbvalue'))}};
  txtRestore.ontouchmove=function(e){e.stopPropagation()};
  NSB.addProperties(txtRestore);
  frmRestore.style.display = 'none';
}, false);
frmRestore.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(frmRestore);
restoreT.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Home"):
    ChangeForm(frmMainMenu);
	break;
  case ((choice) == "Restore"):
    dbJSON = txtRestore.value;
    dbJSON = Trim(dbJSON);
    if(Len(dbJSON) == 0) {
      NSB.MsgBox("Please replace the text with the copied text from the 'Backup' E-Mail!");
       return;
    }
    NSB.ShowProgress("Working on it...");
 // start the process
    dbImport=JSON.parse(dbJSON);
    SQLImport(dbImport, dbObj, restoreComplete);
  }
return savethefunction_rvar; }

function restoreComplete() { savethefunction_rvar="";
  NSB.ShowProgress(False);
return savethefunction_rvar; }

frmRestore.onshow = function() { savethefunction_rvar="";
  txtRestore.Left = 10;
  txtRestore.Top = 42;
  txtRestore.Height = frmRestore.Height - restoreT.Height - 10;
  txtRestore.Width = frmRestore.Width - 20;
  txtRestore.value = localStorage.getItem("backup");
return savethefunction_rvar; }

window.addEventListener('load', function() {
  frmSponsorAnalysis.style.display = 'block';
  NSB.List_jqm_init('sponsorAnalysisL','',true,'400',false);
  sponsorAnalysisL_ref = new iScroll('sponsorAnalysisL_scroller',{ bounce:true, zoom:false });
  sponsorAnalysisL.refresh=function(){if (typeof sponsorAnalysisL_ref!='undefined') setTimeout(NSB.refresh,100,sponsorAnalysisL_ref)};
  NSB.addProperties(sponsorAnalysisL, sponsorAnalysisL_scroller);

(function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('sponsorAnalysisL_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
  NSB.addProperties(sponsorAnalysisT);
  NSB.addDisableProperty(sponsorAnalysisT);


  if(typeof(sponsorAnalysisT.onclick)=='function'){
    if(typeof(sponsorAnalysisT_left)!='undefined') sponsorAnalysisT_left.onclick=function() {sponsorAnalysisT.onclick(sponsorAnalysisT_left.getAttribute('nsbvalue'))};
    if(typeof(sponsorAnalysisT_right)!='undefined') sponsorAnalysisT_right.onclick=function() {sponsorAnalysisT.onclick(sponsorAnalysisT_right.getAttribute('nsbvalue'))}};
sponsorAnalysisC_settings={'title':'', 'background':'white',
'description':'', 'padding':{ left: 10, top: 10, right: 10, bottom: 10 }, 'titlePadding':{ left: 2, top: 2, right: 2, bottom: 2 },
'colorScheme':'scheme01', 'showLegend':'true', 'enabled':'true',
'showToolTips':'true', 'toolTipDelay':'500' }
sponsorAnalysisC.style.position='relative';
NSB.addProperties(sponsorAnalysisC,sponsorAnalysisC_wrapper);
  frmSponsorAnalysis.style.display = 'none';
}, false);
frmSponsorAnalysis.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(frmSponsorAnalysis);
var  pqry;

function LoadCategoryAnalysis() { savethefunction_rvar="";
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Loading...");
  categoryAnalysisL.Top = categoryAnalysisT.Height;
  categoryAnalysisC.Top = categoryAnalysisT.Height;
  categoryAnalysisL.Height = frmCategoryAnalysis.Height - categoryAnalysisT.Height;
  categoryAnalysisC.Height = frmCategoryAnalysis.Height - categoryAnalysisT.Height;
  categoryAnalysisL.Width = 400;
  categoryAnalysisC.Left = 401;
  categoryAnalysisC.Width = frmCategoryAnalysis.Width - 401;
  InitializeList(categoryAnalysisL,"Budget per Category,Implementation Progress,Projects per Category & Project Stage" ,"," ,True);
  document.body.style.cursor = 'default';
  NSB.ShowProgress(False);
}

categoryAnalysisL.onclick = function(i) { savethefunction_rvar="";
  if(TypeName(i) == "object" )  { return savethefunction_rvar; }
 var  strItem;
  strItem = categoryAnalysisL.getItem(i);
 //console.log(strItem)
  $("#categoryAnalysisT h1").text("SAFIRI Mobile Project.Show > Category Analysis > "  +  strItem);
  switch (True) {
  case ((strItem) == "Budget per Category"):
    BudgetPerCategory();
	break;
  case ((strItem) == "Implementation Progress"):
    ImplementationProgress();
	break;
  case ((strItem) == "Projects per Category & Project Stage"):
    ProjectsPerCategoryAndProjectStage();
  }
return savethefunction_rvar; }

function ProjectsPerCategoryAndProjectStage() {
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Working on it...");
 var  sqlList;
 sqlList = [];
  pqry = "SELECT CategoryName,StageName, COUNT(Id) AS Records FROM Projects GROUP BY CategoryName, StageName;";
  sqlList[0] = [pqry, ProjectsPerCategoryAndProjectStageH, ProjectsPerYearEndE];
  Sql(dbObj, sqlList);
}

function ProjectsPerCategoryAndProjectStageH(transaction, results) { savethefunction_rvar="";
 var  row, i, sCategoryName, sStageName, sRecords, chartRow, chartData;
 var  sStages, skey, allportfolios, allstages, spportfolios, spstages, pcnt, ptot, scnt, stot;
 // build the data to plot first, step 1
  allportfolios = "";
  allstages = "";
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sCategoryName = row["CategoryName"];
    sStageName = row["StageName"];
    if(IsNull(sCategoryName) == True ) { sCategoryName = "Unknown"; }
    if(IsNull(sStageName) == True ) { sStageName = "Unknown"; }
    if(InStr(allportfolios,sCategoryName) == 0 ) { allportfolios = allportfolios  +  sCategoryName  +  VM; }
    if(InStr(allstages,sStageName) == 0 ) { allstages = allstages  +  sStageName  +  VM; }
  }
  allportfolios = Left(allportfolios, Len(allportfolios) - 1);
  allstages = Left(allstages, Len(allstages) - 1);
 // define the structure
  spportfolios = Split(allportfolios, VM);
  spstages = Split(allstages, VM);
  ptot = spportfolios.length - 1;
  stot = spstages.length - 1;
  for   (pcnt = 0; pcnt  <= ptot; pcnt ++) {
    for   (scnt = 0; scnt  <= stot; scnt ++) {
      skey = spportfolios[pcnt]  +  "*"  +  spstages[scnt];
      localStorage.setItem(skey, 0);
    }
  }
 // build the data to plot first, step 2
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sCategoryName = row["CategoryName"];
    sStageName = row["StageName"];
    sRecords = row["Records"];
    if(IsNull(sCategoryName) == True ) { sCategoryName = "Unknown"; }
    if(IsNull(sStageName) == True ) { sStageName = "Unknown"; }
    if(IsNull(sRecords) == True ) { sRecords = 0; }
    skey = sCategoryName  +  "*"  +  sStageName;
    localStorage.setItem(skey,sRecords);
  }
 //define the chart data
  chartData = [];
  spportfolios = Split(allportfolios, VM);
  spstages = Split(allstages, VM);
  ptot = spportfolios.length - 1;
  stot = spstages.length - 1;
  for   (pcnt = 0; pcnt  <= ptot; pcnt ++) {
    sCategoryName = spportfolios[pcnt];
    chartRow = {}
    chartRow["category"] = sCategoryName;
    for   (scnt = 0; scnt  <= stot; scnt ++) {
      sStageName = spstages[scnt];
      skey = sCategoryName  +  "*"  +  sStageName;
      sRecords = localStorage.getItem(skey);
      chartRow[sStageName] = sRecords;
    }
    chartData[pcnt] = chartRow;
  }
 // build the series
 var  sSeries;
 sSeries = [];
 var  sSeriesE;
  spstages = Split(allstages, VM);
  stot = spstages.length - 1;
  for   (scnt = 0; scnt  <= stot; scnt ++) {
    sStageName = spstages[scnt];
    sSeriesE = {}
    sSeriesE["dataField"] = sStageName;
    sSeriesE["showLabels"] = False;
    sSeriesE["displayText"] = sStageName;
    sSeries[scnt] = sSeriesE;
  }
 // set the chart

  categoryAnalysisC_settings.showBorderLine = True;
  categoryAnalysisC_settings.source = chartData;
  categoryAnalysisC_settings.showLegend = True;
  categoryAnalysisC_settings.categoryAxis={dataField:"category" , showGridLines:True, textRotationAngle:-90}
  categoryAnalysisC_settings.seriesGroups = [  {  type: "column" ,  valueAxis: {description: "Projects" , unitInterval: 5},  series: sSeries,  }  ];
  $("#categoryAnalysisC").jqxChart(categoryAnalysisC_settings);
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function ImplementationProgress() {
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Working on it...");
 var  sqlList;
 sqlList = [];
  pqry = "select CategoryAliasName,sum(budget) as Budget from projects group by CategoryAliasName;";
  sqlList[0] = [pqry, ImplementationProgressH, ProjectsPerYearEndE];
  Sql(dbObj, sqlList);
}

function ImplementationProgressH(transaction, results) { savethefunction_rvar="";
 var  row, i, sCategoryName, sBudget, chartRow, chartData;
  chartData = [];
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sCategoryName = row["CategoryAliasName"];
    sBudget = row["Budget"];
    if(IsNull(sCategoryName) == True ) { sCategoryName = "Unknown"; }
    if(IsNull(sBudget) == True ) { sBudget = "0"; }
    sBudget = parseFloat(sBudget) / 1000000;
    sBudget = Round(sBudget,0);
    chartRow = {}
    chartRow["category"] = sCategoryName;
    chartRow["budget"] = sBudget;
    chartData[i] = chartRow;
  }
 // set the chart
  categoryAnalysisC_settings.showBorderLine = True;
  categoryAnalysisC_settings.source = chartData;
  categoryAnalysisC_settings.showLegend = True;
  categoryAnalysisC_settings.seriesGroups = [  {  type: "pie" , showLabels: True,  series:[ { dataField: "budget" ,  displayText: "category" ,  formatSettings: {sufix: " (M)" , thousandsSeparator: "," , decimalPlaces:"0"},  labelRadius: 100, initialAngle: 15, centerOffset: 0}],  }  ];
  $("#categoryAnalysisC").jqxChart(categoryAnalysisC_settings);
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function BudgetPerCategory() {
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Working on it...");
 var  sqlList;
 sqlList = [];
  pqry = "select CategoryName,sum(budget) as Budget from projects group by CategoryName;";
  sqlList[0] = [pqry, BudgetPerCategoryH, ProjectsPerYearEndE];
  Sql(dbObj, sqlList);
}

function BudgetPerCategoryH(transaction, results) { savethefunction_rvar="";
 var  row, i, sCategoryName, sBudget, chartRow, chartData;
  chartData = [];
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sCategoryName = row["CategoryName"];
    sBudget = row["Budget"];
    if(IsNull(sCategoryName) == True ) { sCategoryName = "Unknown"; }
    if(IsNull(sBudget) == True ) { sBudget = "0"; }
    sBudget = parseFloat(sBudget) / 1000000;
    sBudget = Round(sBudget,0);
    chartRow = {}
    chartRow["category"] = sCategoryName;
    chartRow["budget"] = sBudget;
    chartData[i] = chartRow;
  }
 // set the chart
  categoryAnalysisC_settings.showBorderLine = True;
  categoryAnalysisC_settings.source = chartData;
  categoryAnalysisC_settings.showLegend = True;
  categoryAnalysisC_settings.seriesGroups = [  {  type: "pie" , showLabels: True,  series:[ { dataField: "budget" ,  displayText: "category" ,  formatSettings: {sufix: " (M)" , thousandsSeparator: "," , decimalPlaces:"0"},  labelRadius: 100, initialAngle: 15, centerOffset: 0}],  }  ];
  $("#categoryAnalysisC").jqxChart(categoryAnalysisC_settings);
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

categoryAnalysisT.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Back"):
    ChangeForm(frmAnalysis);
  }
return savethefunction_rvar; }

frmCategoryAnalysis.onshow = function() { savethefunction_rvar="";
  LoadCategoryAnalysis();
return savethefunction_rvar; }



function Main() {
  localStorage.clear();
  dbName = "projectshow.db";
  NSB.MsgBoxStyle="";
  dbObj = SqlOpenDatabase(dbName);
  if(dbObj == 0) {
    NSB.MsgBox("Error opening db");
  }
 // ensure the tables exist
  Trial_CreateTable();
  sqlList = [];
}

var  dbName;
var  dbObj;
var  catFrom, sqlList,rCnt,query, recid, isnew;
var DB_REAL = "REAL";
var DB_INTEGER = "INTEGER";
var DB_BLOB = "BLOB";
var DB_TEXT = "TEXT";
var DB_FLOAT = "FLOAT";
var DB_NUMERIC = "NUMERIC";
var VM = Chr(253);
var FM = Chr(254);
var Quote = Chr(34);
var DQuote = Chr(34)  +  Chr(34);
var  InsertCommands, UpdateCommands, dbExport, dbJSON, dbImport;

function InDoubleQuotes(svalue) { savethefunction_rvar="";
  svalue = Quote  +  svalue  +  Quote;
  return svalue;
return savethefunction_rvar; }

function TableDistinctList(sourceTable,sourceField) { savethefunction_rvar="";
  localStorage.setItem("distinct" ,sourceField);
 var  cboList;
 cboList = [];
  query = "SELECT ["  +  sourceField  +  "]  FROM ["  +  sourceTable  +  "] ORDER BY ["  +  sourceField  +  "];";
  cboList[0] = [query, TableDistinctList1];
  Sql(dbObj, cboList);
return savethefunction_rvar; }

function TableDistinctList1(transaction, results) { savethefunction_rvar="";
 var  row, i, sdistinct, svalue, svalues;
  sdistinct = localStorage.getItem("distinct");
  svalues = "";
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    svalue = row[sdistinct];
    svalues = svalues  +  svalue  +  FM;
  }
  svalues = RemoveDelim(svalues,FM);
  localStorage.setItem("distinct_"  +  sdistinct,svalues);
return savethefunction_rvar; }

function ComboBoxDef() { savethefunction_rvar="";
 var  strDef;
  strDef = "<html><Select style="  +  DQuote;
  strDef = strDef  +  " name="  +  DQuote;
  strDef = strDef  +  " data-role="  +  InDoubleQuotes("none")  +  ">";
  strDef = strDef  +  "<Option value="  +  DQuote  +  "></Option></Select>";
  strDef = strDef  +  "<span Class="  +  InDoubleQuotes("arrow")  +  "></span></html>";
  return strDef;
return savethefunction_rvar; }

function NumericOnly(svalue) { savethefunction_rvar="";
 var  sout, lenvalue, i, spart;
  sout = "";
  lenvalue = Len(svalue);
  for   (i = 1; i  <= lenvalue; i ++) {
    spart = Mid(svalue,i,1);
    switch (True) {
    case ((spart) == "1"):
 sout = sout  +  spart;
	break;
    case ((spart) == "2"):
 sout = sout  +  spart;
	break;
    case ((spart) == "3"):
 sout = sout  +  spart;
	break;
    case ((spart) == "4"):
 sout = sout  +  spart;
	break;
    case ((spart) == "5"):
 sout = sout  +  spart;
	break;
    case ((spart) == "6"):
 sout = sout  +  spart;
	break;
    case ((spart) == "7"):
 sout = sout  +  spart;
	break;
    case ((spart) == "8"):
 sout = sout  +  spart;
	break;
    case ((spart) == "9"):
 sout = sout  +  spart;
	break;
    case ((spart) == "0"):
 sout = sout  +  spart;
	break;
    case ((spart) == "-"):
 sout = sout  +  spart;
    }
  }
  return sout;
return savethefunction_rvar; }

function FixMonths(smonths) { savethefunction_rvar="";
  smonths = CStr(smonths);
 var  lenx;
 lenx = Len(smonths);
  if(lenx == 1) {
    return smonths;
 } else {
   var  part1, part2;
    part1 = Left(smonths,1);
    part2 = Mid(smonths,2);
    smonths = part1  +  "."  +  part2;
    smonths = Round(smonths,0);
    return smonths;
  }
return savethefunction_rvar; }

function InitializeList(lstname,stritems,delim,bclear) {
 // clear the items in the list
 var  spitems, rscnt, rstot, stritem;
  if(bclear == True ) { lstname.deleteItem("all"); }
  spitems = Split(stritems,delim);
  rstot = spitems.length - 1;
  for   (rscnt = 0; rscnt  <= rstot; rscnt ++) {
    stritem = spitems[rscnt];
    lstname.addItem(stritem);
  }
  lstname.refresh();
}

function ListAddTextDescription(targetList,stext,sdescription) {
  stext = "<span class="  +  InDoubleQuotes("name")  +  ">"  +  stext  +  "</span><span class="  +  InDoubleQuotes("comment")  +  ">"  +  sdescription  +  "</span>";
  targetList.addItem(stext);
}

function ResizeHeaderList(form,header,child) {
  child.Left = 0;
  child.Top = header.Height;
  child.Height = form.Height - header.Height;
  child.refresh();
}

function RemoveDelim(strmv,delim) { savethefunction_rvar="";
 var  lendelim, rightpart, strout;
  lendelim = Len(delim);
  rightpart = Right(strmv,lendelim);
  strout = strmv;
  if(rightpart == delim) {
    strout = Left(strmv, Len(strmv) - lendelim);
  }
  return strout;
return savethefunction_rvar; }

function MvRemoteItem(strmv,sremove,delim) { savethefunction_rvar="";
  sremove = LCase(sremove);
 var  sout, lendelim;
 sout = "";
 var  spv;
 spv = Split(strmv,delim);
 var  stot, scnt, sitem;
  lendelim = Len(delim);
  stot = spv.length - 1;
  for   (scnt = 0; scnt  <= stot; scnt ++) {
    sitem = LCase(spv[scnt] );
    if(sitem != sremove ) { sout = sout  +  spv[scnt]  +  delim; }
  }
  sout = Left(sout, Len(sout) - lendelim);
  return sout;
return savethefunction_rvar; }

function MvSearch(searchvalues,strsearch,delim) { savethefunction_rvar="";
    if(Len(searchvalues)==0 ) { return -1; }
   var  spvalues, i, itot, ivalue;
    spvalues = Split(searchvalues,delim);
    strsearch = LCase(strsearch);
    itot = spvalues.length - 1;
    for   (i = 0; i  <= itot; i ++) {
      ivalue = spvalues[i];
      ivalue = LCase(ivalue);
      if(ivalue == strsearch ) { return i; }
    }
    return -1;
return savethefunction_rvar; }

function DbDateOut(sDate) { savethefunction_rvar="";
   var  xToday;
    xToday = CDate(sDate);
    xToday = FormatDateTime(xToday, "DD/MM/YYYY");
    return xToday;
return savethefunction_rvar; }

function DbDateOut1(sDate) { savethefunction_rvar="";
   var  xToday;
    xToday = CDate(sDate);
    xToday = FormatDateTime(xToday, "YYYYMMDD");
    return xToday;
return savethefunction_rvar; }

function ToDay() { savethefunction_rvar="";
  return FormatDateTime(dateadd("s",0,new Date()), "DD/MM/YYYY");
return savethefunction_rvar; }

function ToDay1() { savethefunction_rvar="";
  return FormatDateTime(dateadd("s",0,new Date()), "YYYYMMDD");
return savethefunction_rvar; }

function MvField(svalue,iposition,delimiter) { savethefunction_rvar="";
 var  mvalues,tvalues,xvalue;
  mvalues = Split(svalue, delimiter);
  tvalues = mvalues.length - 1;
  iposition = iposition - 1;
  if(iposition <= -1) {
    xvalue = mvalues[tvalues];
    return xvalue;
  }
  if(iposition > tvalues) {
     return "";
  }
  xvalue = mvalues[iposition];
  return xvalue;
return savethefunction_rvar; }

function MvRest(svalue,iposition,delimiter) { savethefunction_rvar="";
 var  mvalues,tvalues,xvalue, x, y, resultx;
 var  lendelim;
  lendelim = Len(delimiter);
  mvalues = Split(svalue, delimiter);
  tvalues = mvalues.length - 1;
  iposition = iposition - 1;
  if(iposition <= -1) {
    xvalue = mvalues[tvalues];
    return xvalue;
  }

  if(iposition > tvalues) {
     return "";
  }

  resultx = "";
  x = iposition + 1;
  for   (y = x; y  <= tvalues; y ++) {
    xvalue = mvalues[y];
    resultx = resultx  +  xvalue  +  delimiter;
  }

  resultx = Left(resultx, Len(resultx) - lendelim);
  return resultx;
return savethefunction_rvar; }



function MakeMoney(svalue) { savethefunction_rvar="";
    svalue = ProperAmount(svalue);
    svalue = FormatNumber(svalue);
    return svalue;
return savethefunction_rvar; }



function ProperAmount(svalue) { savethefunction_rvar="";
    svalue = Replace(svalue,"," ,"");
    dpos = InStr(1,svalue,".");
    if(dpos == 0 ) { svalue = svalue  +  ".00"; }
    return svalue;
return savethefunction_rvar; }



function InSingleQuote(strV) { savethefunction_rvar="";
  return "'"  +  strV  +  "'";
}



function MonthNames(intM) { savethefunction_rvar="";
  return MonthName(intM,True);
return savethefunction_rvar; }

function MonthNumber(strM) { savethefunction_rvar="";
  strM = LCase(strM);
  switch (True) {
  case ((strM) == "jan"):
 return 1;
	break;
  case ((strM) == "feb"):
 return 2;
	break;
  case ((strM) == "mar"):
 return 3;
	break;
  case ((strM) == "apr"):
 return 4;
	break;
  case ((strM) == "may"):
 return 5;
	break;
  case ((strM) == "jun"):
 return 6;
	break;
  case ((strM) == "jul"):
 return 7;
	break;
  case ((strM) == "aug"):
 return 8;
	break;
  case ((strM) == "sep"):
 return 9;
	break;
  case ((strM) == "oct"):
 return 10;
	break;
  case ((strM) == "nov"):
 return 11;
	break;
  case ((strM) == "dec"):
 return 12;
  }
return savethefunction_rvar; }

function SetHeaderTitle(hdObj,hdTitle) {
 var  shd;
 shd = "#"  +  hdObj  +  " h1";
  $(shd).text(hdTitle);
}



 //"#FF0000"; red

 // set grid rowcol color

function GridRowColColour(grdName,rowPos,colPos,colour) {
  grdName.cell(rowPos,colPos).style.color = colour;
  grdName.refresh();
}

function GridRowColBackgroundColour(grdName,rowPos,colPos,colour) {
  grdName.cell(rowPos,colPos).style.backgroundColor = colour;
  grdName.refresh();
}




function GridRowColor(grdName,rowPos,colour) {
 var  grdCols, i;
  grdCols = grdName.getColCount();
  for   (i = 0; i  <= grdCols - 1; i ++) {
    grdName.cell(rowPos,i).style.color = color;
  }
  grdName.refresh();
}



 // center align records in a grid

function GridCenterAlign(grdName,startCol,endCol) {
   var  grdRows, i;
    grdRows = grdName.getRowCount();
    for   (i = 1; i  <= grdRows - 1; i ++) {
      for   (col = startCol; col  <= endCol; col ++) {
        grdName.cell(i,col).style.textAlign = "center";
      }
    }
    grdName.refresh();
}



 // right align columns in a grid

function GridRightAlign(grdName,startCol,endCol) {
   var  grdRows, i;
    grdRows = grdName.getRowCount();
    for   (i = 1; i  <= grdRows - 1; i ++) {
      for   (col = startCol; col  <= endCol; col ++) {
        grdName.cell(i,col).style.textAlign = "right";
      }
    }
    grdName.refresh();
}



 // set the heigh of a grid row

function GridSetHeight(grdName,grdRowHeight) {
 var  grdRows, i;
  grdRows = grdName.getRowCount();
  for   (i = 1; i  <= grdRows - 1; i ++) {
    grdName.setRowHeight(i, grdRowHeight);
  }
  grdName.refresh();
}



function GridBoldRow(grdName,rowPos) {
 var  grdCols, i;
  grdCols = grdName.getColCount();
  for   (i = 0; i  <= grdCols - 1; i ++) {
    grdName.cell(rowPos,i).style.fontWeight = "bold";
  }
  grdName.refresh();
}



 // draw alternate colors in the grid

function GridAlternateColor(grdName) {
 //Paints Each row in alernating color.
 var  grdRows, grdCols, i;
  grdRows = grdName.getRowCount();
  grdCols = grdName.getColCount();
  for   (i = 1; i  <= grdRows - 1; i ++) {
    for   (col = 0; col  <= grdCols - 1; col ++) {
      if((Math.abs(i) % 2) == 1) {
        grdName.cell(i,col).style.backgroundColor = RGB(255,255,240);
 } else {
        grdName.cell(i,col).style.backgroundColor = RGB(240,248,255);
      }
    }
  }
  grdName.refresh();
}



 // used to insert an object() record to the database

function InsertRecord(tblName,tblRecord) { savethefunction_rvar="";
 var  sqlInst;
  sqlInst = [];
 var  flds, vals;
  flds = "";
  vals = "";
  for (item in tblRecord) {
    flds = flds  +  "["  +  item  +  "],";
    vals = vals  +  tblRecord[item]  +  ",";
  }
  flds = Left(flds, Len(flds) - 1);
  vals = Left(vals, Len(vals) - 1);
  sqlInst[0] = "INSERT OR REPLACE INTO ["  +  tblName  +  "] ("  +  flds  +  ") VALUES ("  +  vals  +  ");";
  Sql(dbObj, sqlInst);
return savethefunction_rvar; }



 // used to insert an object() record to the database

function InsertRecord1(tblName,tblRecord,position) { savethefunction_rvar="";
 var  flds, vals;
  flds = "";
  vals = "";
  for (item in tblRecord) {
    flds = flds  +  "["  +  item  +  "],";
    vals = vals  +  tblRecord[item]  +  ",";
  }
  flds = Left(flds, Len(flds) - 1);
  vals = Left(vals, Len(vals) - 1);
  InsertCommands[position] = "INSERT OR REPLACE INTO ["  +  tblName  +  "] ("  +  flds  +  ") VALUES ("  +  vals  +  ");";
return savethefunction_rvar; }



function CreateTable(TableName, FieldsAndTypes, PrimaryKey, AutoIncrement) { savethefunction_rvar="";
 var  sb, fdef, sqlCreate;
  sb = "(";
  for (item in FieldsAndTypes) {
    fdef = "["  +  item  +  "] "  +  UCase(FieldsAndTypes[item]);
    sb = sb  +  fdef;
    if(item == PrimaryKey ) { sb = sb  +  " NOT NULL PRIMARY KEY"; }
    if(item == AutoIncrement ) { sb = sb  +  " AUTOINCREMENT"; }
    sb = sb  +  ", ";
  }
  sb = Left(sb, Len(sb) - 2);
  sb = sb  +  ")";
  sb = "CREATE TABLE IF NOT EXISTS ["  +  TableName  +  "] "  +  sb  +  ";";
 //console.log(sb)
  sqlCreate = [];
  sqlCreate[0] = sb;
  Sql(dbObj, sqlCreate);
}

function DeleteIndex(TableName, idxname) { savethefunction_rvar="";
 var  idxkey, sb, delidx;
  idxkey = TableName  +  "_"  +  idxname;
  delidx = [];
  delidx[0] = "DROP INDEX IF EXISTS "  +  idxkey  +  ";";
  delidx[1] = "DROP INDEX IF EXISTS "  +  idxname  +  ";";
  Sql(dbObj, delidx);
return savethefunction_rvar; }


function CreateTableIndexes(TableName, Indexes) { savethefunction_rvar="";
 var  sb, idef, sqlCreateIdx, idxname;
 var  spidx, idxtot, idxcnt, idx;
  spidx = Split(Indexes,",");
  idxtot = spidx.length - 1;
  sqlCreateIdx = [];
  for   (idxcnt = 0; idxcnt  <= idxtot; idxcnt ++) {
    idx = spidx[idxcnt];
    idxname = TableName  +  "_"  +  idx;
    idef = "CREATE INDEX IF NOT EXISTS ["  +  idxname  +  "] ON ["  +  TableName  +  "] (["  +  idx  +  "]);";
 //console.log(idef)
    sqlCreateIdx[idxcnt] = idef;
  }
  Sql(dbObj, sqlCreateIdx);
return savethefunction_rvar; }



function ResetInsertCommands() { savethefunction_rvar="";
    InsertCommands = [];
return savethefunction_rvar; }



function ExecuteInsertCommands() { savethefunction_rvar="";
  Sql(dbObj, InsertCommands);
return savethefunction_rvar; }



function ExecuteUpdateCommands() { savethefunction_rvar="";
  Sql(dbObj,UpdateCommands);
return savethefunction_rvar; }



function MvSum(strvalues,delim) { savethefunction_rvar="";
 var  dtot, i;
 dtot = 0;
 var  spvalues;
 spvalues = Split(strvalues,delim);
 var  dlen;
 dlen = spvalues.length - 1;
  for   (i = 0; i  <= dlen; i ++) {
    dtot = parseFloat(dtot) + parseFloat(spvalues[i] );
  }
  dtot = Round(dtot,2);
  return dtot;
return savethefunction_rvar; }



function DeleteTable(tblName) { savethefunction_rvar="";
 var  sqlD;
  sqlD = [];
  sqlD[0]=["DROP TABLE IF EXISTS ["  +  tblName  +  "];"];
  Sql(dbObj, sqlD);
return savethefunction_rvar; }





 // used to update an object() record to the database

 // using another object() for the where clause

function UpdateRecord(tblName,tblRecord,tblWhere) { savethefunction_rvar="";
 var  sqlUpd;
  sqlUpd = [];
 var  vals, wvals;
  vals = "";
  wvals = "";
  for (item in tblRecord) {
    vals = vals  +  "["  +  item  +  "] = "  +  tblRecord[item]  +  ",";
  }
  vals = Left(vals, Len(vals) - 1);
  for (item in tblWhere) {
    wvals = wvals  +  "["  +  item  +  "] = "  +  tblWhere[item]  +  ",";
  }
  wvals = Left(wvals, Len(wvals) - 1);
  sqlUpd[0] = "UPDATE ["  +  tblName  +  "] SET "  +  vals  +  " WHERE "  +  wvals  +  ";";
  Sql(dbObj, sqlUpd);
return savethefunction_rvar; }



 // update all records of the table

function UpdateRecords(tblName,tblRecord) { savethefunction_rvar="";
 var  sqlUpd,vals;
  sqlUpd = [];
  vals = "";
  for (item in tblRecord) {
    vals = vals  +  "["  +  item  +  "] = "  +  tblRecord[item]  +  ",";
  }
  vals = Left(vals, Len(vals) - 1);
  sqlUpd[0] = "UPDATE ["  +  tblName  +  "] SET "  +  vals  +  ";";
  Sql(dbObj, sqlUpd);
return savethefunction_rvar; }



 // used to delete an object() record from the database

 // using another object() for the where clause

function DeleteRecord(tblName,tblWhere) { savethefunction_rvar="";
 var  sqlUpd;
  sqlUpd = [];
 var  wvals;
  wvals = "";
  for (item in tblWhere) {
    wvals = wvals  +  "["  +  item  +  "] = "  +  tblWhere[item]  +  ",";
  }
  wvals = Left(wvals, Len(wvals) - 1);
  sqlUpd[0] = "DELETE FROM ["  +  tblName  +  "] WHERE "  +  wvals  +  ";";
  Sql(dbObj, sqlUpd);
return savethefunction_rvar; }



function DeleteRecords(tblName) { savethefunction_rvar="";
 var  sqlDel;
  sqlDel = [];
  sqlDel[0] = "DELETE FROM ["  +  tblName  +  "];";
  Sql(dbObj, sqlDel);
return savethefunction_rvar; }



 // used to update an object() record to the database

 // using another object() for the where clause

function UpdateRecord1(tblName,tblRecord,tblWhere,position) { savethefunction_rvar="";
 var  vals, wvals;
  vals = "";
  wvals = "";
  for (item in tblRecord) {
    vals = vals  +  "["  +  item  +  "] = "  +  tblRecord[item]  +  ",";
  }
  vals = Left(vals, Len(vals) - 1);
  for (item in tblWhere) {
    wvals = wvals  +  "["  +  item  +  "] = "  +  tblWhere[item]  +  ",";
  }
  wvals = Left(wvals, Len(wvals) - 1);
  UpdateCommands[position] = "UPDATE ["  +  tblName  +  "] SET "  +  vals  +  " WHERE "  +  wvals  +  ";";
return savethefunction_rvar; }



function ComboIndexOf(cboBox,cboSearch) { savethefunction_rvar="";
   var  cboOut;
 cboOut = -1;
 //cboSearch = LCase(cboSearch)
   var  cboTot;
 cboTot = cboBox.getItemCount();
   var  xitem, i;
    for   (i = 0; i  <= cboTot - 1; i ++) {
      xitem = cboBox.List(i);
 //xItem = LCase(xItem)
      if(xitem == cboSearch ) { return i; }
    }
    return cboOut;
return savethefunction_rvar; }



function GridDefault(grdName) { savethefunction_rvar="";
  GridSetHeight(grdName,"32px");
  GridAlternateColor(grdName);
return savethefunction_rvar; }



function GridAddRow(grdName,colValues,delim,rowPos) { savethefunction_rvar="";
 var  vTot, spvalues, i;
  spvalues = Split(colValues,delim);
  vTot = spvalues.length;
  grdName.addRows(1);
  for   (i = 0; i  <= vTot - 1; i ++) {
    grdName.setValue(rowPos,i,spvalues[i] );
  }
return savethefunction_rvar; }



function GridAddNextRow(grdName,colValues,delim) { savethefunction_rvar="";
 var  vTot, rowPos, spvalues, i;
  rowPos = grdName.getRowCount();
  spvalues = Split(colValues,delim);
  vTot = spvalues.length;
  grdName.addRows(1);
  for   (i = 0; i  <= vTot - 1; i ++) {
    grdName.setValue(rowPos,i,spvalues[i] );
  }
return savethefunction_rvar; }



function GridAddImage(grdName,rowPos,colPos,imgName) { savethefunction_rvar="";
 var  imgID, imgDef;
  imgID = grdName  +  "_"  +  rowPos  +  "_"  +  colPos;
  imgDef= "<img width=25px height=25px style=cursor:pointer src='"  +  imgName  +  "' id='"  +  imgID  +  "'>";
  grdName.setValue(rowPos,colPos, imgDef);
return savethefunction_rvar; }

function GridAddTextImage(grdName,rowPos,colPos,text,img) { savethefunction_rvar="";
 var  imgDef, imgID;
  imgID = grdName  +  "_"  +  rowPos  +  "_"  +  colPos;
  imgDef= text  +  "<img src='"  +  img  +  "' align='right' id='"  +  imgID  +  "'>";
  grdName.setValue(rowPos,colPos,imgDef);
return savethefunction_rvar; }

function GridAddTextImageDefinition(grdName,rowPos,colPos,text,img) { savethefunction_rvar="";
 var  imgDef, imgID;
  imgID = grdName  +  "_"  +  rowPos  +  "_"  +  colPos;
  imgDef= text  +  "  <img width=20px height=20px src='"  +  img  +  "' align='right' id='"  +  imgID  +  "'>";
  return imgDef;
return savethefunction_rvar; }

function GridAddImageDefinition(grdName,rowPos,colPos,imgName) { savethefunction_rvar="";
 var  imgID, imgDef;
  imgID = grdName  +  "_"  +  rowPos  +  "_"  +  colPos;
  imgDef= "<img width=25px height=25px style=cursor:pointer src='"  +  imgName  +  "' id='"  +  imgID  +  "'>";
  return imgDef;
return savethefunction_rvar; }



function GridAddImageDefinitionAction(grdName,grdAction,grdId,imgName) { savethefunction_rvar="";
 var  imgID, imgDef;
  imgID = grdName  +  "_"  +  grdAction  +  "_"  +  grdId;
  imgDef= "<img width=25px height=25px style=cursor:pointer src='"  +  imgName  +  "' id='"  +  imgID  +  "'>";
  return imgDef;
return savethefunction_rvar; }



function GridAddImageDelete(grdName,rowPos,colPos) { savethefunction_rvar="";
    GridAddImage(grdName,rowPos,colPos,"delete.png");
return savethefunction_rvar; }



function GridAddImageEdit(grdName,rowPos,colPos) { savethefunction_rvar="";
    GridAddImage(grdName,rowPos,colPos,"edit.png");
return savethefunction_rvar; }



function GridAddImageChart(grdName,rowPos,colPos) { savethefunction_rvar="";
    GridAddImage(grdName,rowPos,colPos,"chart.png");
return savethefunction_rvar; }



function GridAddImageView(grdName,rowPos,colPos) { savethefunction_rvar="";
    GridAddImage(grdName,rowPos,colPos,"view.png");
return savethefunction_rvar; }



function GridAddImagePayTo(grdName,rowPos,colPos) { savethefunction_rvar="";
    GridAddImage(grdName,rowPos,colPos,"payto.png");
return savethefunction_rvar; }



function GridAddImageDrillDown(grdName,rowPos,colPos) { savethefunction_rvar="";
    GridAddImage(grdName,rowPos,colPos,"drill.png");
return savethefunction_rvar; }

function GridAddImageDuplicate(grdName,rowPos,colPos) { savethefunction_rvar="";
    GridAddImage(grdName,rowPos,colPos,"duplicate.png");
return savethefunction_rvar; }

function GridAddImageReverse(grdName,rowPos,colPos) { savethefunction_rvar="";
    GridAddImage(grdName,rowPos,colPos,"reverse.png");
return savethefunction_rvar; }


function email(t, subject, body) { savethefunction_rvar="";
  location="mailto:"  +  encodeURI(t)  +  "?subject="  +  encodeURI(subject)  +  "&body=" + encodeURI(body);
return savethefunction_rvar; }

function phone(tel) { savethefunction_rvar="";
  location="tel:"  +  tel;
return savethefunction_rvar; }

function skype(tel) { savethefunction_rvar="";
  location="skype:"  +  tel;
return savethefunction_rvar; }

function sms(tel, body) { savethefunction_rvar="";
  location="sms:"  +  tel  +  "?body="  +  encodeURL(body);
return savethefunction_rvar; }

function ReadTableRecord(stable,sprimarykey,svalue,sfields) { savethefunction_rvar="";
 var  skey;
 skey = stable  +  "*"  +  svalue;
  localStorage.setItem("read_table" , stable);
  localStorage.setItem("read_pk" , sprimarykey);
  localStorage.setItem("read_id" , svalue);
  localStorage.setItem("read_flds" , sfields);
  localStorage.setItem(skey,"");
  query = "select * from ["  +  stable  +  "] where ["  +  sprimarykey  +  "] = "  +  svalue  +  ";";
 //console.log(query)
 var  sqlRead;
 sqlRead = [];
  sqlRead[0] = [query, ReadTableRecordH, ReadRecordE];
  Sql(dbObj, sqlRead);
return savethefunction_rvar; }


function ReadTableRecordH(transaction, results) { savethefunction_rvar="";
 var  stable, spk, svalue, sfields, skey, spfields, ftot, row, rtot, fcnt, fstr, fvalue, sout;
  stable = localStorage.getItem("read_table");
  spk = localStorage.getItem("read_pk");
  svalue = localStorage.getItem("read_id");
  sfields = localStorage.getItem("read_flds");
  if(IsNull(stable)==True )  { return savethefunction_rvar; }
  if(IsNull(spk)==True )  { return savethefunction_rvar; }
  if(IsNull(svalue)==True )  { return savethefunction_rvar; }
  if(IsNull(sfields)==True )  { return savethefunction_rvar; }
  sout = "";
  skey = stable  +  "*"  +  svalue;
  rtot = results.rows.length - 1;
  if(_jsCint(rtot) == -1 )  { return savethefunction_rvar; }
  row = results.rows.item(0);
  spfields = Split(sfields,",");
  ftot = spfields.length - 1;
  for   (fcnt = 0; fcnt  <= ftot; fcnt ++) {
    fstr = spfields[fcnt];
    fvalue = row[fstr];
    if(IsNull(fvalue) == True ) { fvalue = ""; }
    sout = sout  +  fvalue  +  FM;
  }
  sout = RemoveDelim(sout,FM);
  localStorage.setItem(skey,sout);
 //console.log(sout)
return savethefunction_rvar; }

function ReadRecordE(transaction, results) { savethefunction_rvar="";
  currentRecord = null;
  NSB.MsgBox("SQL Error: "  +  results.code  +  ": "  +  results.message);
return savethefunction_rvar; }


function NextAvailableId(frmToShow) { savethefunction_rvar="";
 var  stable, sprimarykey, sqlList;
  localStorage.setItem("action" ,"new");
  localStorage.setItem("form" ,frmToShow);
  stable = localStorage.getItem("table");
  sprimarykey = localStorage.getItem("primarykey");
  sqlList = [];
  sqlList[0] = ["SELECT MAX("  +  sprimarykey  +  ") as MaxValue FROM ["  +  stable  +  "];" , NextAvailableIdH, NextAvailableIdE];
  Sql(dbObj, sqlList);
return savethefunction_rvar; }

function NextAvailableIdH(transaction, results) { savethefunction_rvar="";
 var  sid, sform;
  sform = localStorage.getItem("form");
  sid = results.rows.item(0)["MaxValue"];
  sid = _jsCint(sid) + 1;
  localStorage.setItem("id" , sid);
 //ChangeForm(sform)
return savethefunction_rvar; }

function NextAvailableIdE(transaction, results) { savethefunction_rvar="";
  localStorage.setItem("id" , "-1");
  NSB.MsgBox("SQL Error: "  +  results.code  +  ": "  +  results.message);
return savethefunction_rvar; }

function MapSum(mapobj,mapkey,mapitem) {
 var  xitem;
  xitem = mapobj[mapkey];
  if(IsNull(xitem) == True) {
    mapobj[mapkey]=mapitem;
 } else {
    xitem = parseFloat(xitem) + parseFloat(mapitem);
    mapobj[mapkey] = xitem;
  }
}

function MapUpdate(mapobj,mapkey,mapitem) {
 var  xitem;
  xitem = mapobj[mapkey];
  if(IsNull(xitem) == True) {
    mapobj[mapkey]=mapitem;
 } else {
    mapobj[mapkey] = mapitem;
  }
}

function MapSearch(mapobj,keySearch) { savethefunction_rvar="";
 var  xitem;
  xitem = mapobj[keySearch];
  if(IsNull(xitem) == True) {
    return True;
 } else {
    return False;
  }
return savethefunction_rvar; }

window.addEventListener('load', function() {
  frmProject.style.display = 'block';
  NSB.addProperties(projectT);
  NSB.addDisableProperty(projectT);


  if(typeof(projectT.onclick)=='function'){
    if(typeof(projectT_left)!='undefined') projectT_left.onclick=function() {projectT.onclick(projectT_left.getAttribute('nsbvalue'))};
    if(typeof(projectT_right)!='undefined') projectT_right.onclick=function() {projectT.onclick(projectT_right.getAttribute('nsbvalue'))}};


  NSB.MultiInput_init('mProjectL');

  NSB.addProperties(mProjectL);


  NSB.MultiInput_init('mProject');

  NSB.addProperties(mProject);
  delete cboProjectCategory.childNodes[0];
  NSB.ComboBox_init('cboProjectCategory');
  NSB.addProperties(cboProjectCategory);
  delete cboProjectComponent.childNodes[0];
  NSB.ComboBox_init('cboProjectComponent');
  NSB.addProperties(cboProjectComponent);
  delete cboProjectStage.childNodes[0];
  NSB.ComboBox_init('cboProjectStage');
  NSB.addProperties(cboProjectStage);
  frmProject.style.display = 'none';
}, false);
frmProject.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(frmProject);
projectT.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Back"):
    ChangeForm(frmDashboard);
	break;
  case ((choice) == "Save"):
    SaveProject();
  }
return savethefunction_rvar; }

frmProject.onshow = function() { savethefunction_rvar="";
 var  sold;
  sold = localStorage.getItem("labels");
  if(IsNull(sold) == True) {
    sold = mProjectL.innerHTML;
    localStorage.setItem("labels" ,sold);
 } else {
    mProjectL.innerHTML = sold;
  }
  mProject.Left = 150;
  mProject.Top = projectT.Height;
  mProjectL.Top = projectT.Height;
  mProject.Width = frmProject.Width - 170;
  mProject.refresh();
  cboProjectCategory.Width = mProject.Width-5;
  cboProjectComponent.Width = mProject.Width-5;
  cboProjectStage.Width = mProject.Width-5;
 // load project category
 var  sqlList;
 sqlList = [];
  query = "SELECT Description FROM Project_Category ORDER BY Description;";
  sqlList[0] = [query, LoadProjectCategory];
  Sql(dbObj, sqlList);
return savethefunction_rvar; }


function LoadProjectCategory(transaction, results) { savethefunction_rvar="";
  cboProjectCategory.clear();
  cboProjectCategory.addItem("" ,"");
 var  row, i, sDescription;
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sDescription = row["Description"];
    cboProjectCategory.addItem(sDescription,sDescription);
  }
  cboProjectCategory.setIndex(0);
 // load project components
 var  sqlList;
 sqlList = [];
  query = "SELECT Description FROM Component ORDER BY Description;";
  sqlList[0] = [query, LoadComponents];
  Sql(dbObj, sqlList);
return savethefunction_rvar; }

function LoadComponents(transaction, results) { savethefunction_rvar="";
  cboProjectComponent.clear();
  cboProjectComponent.addItem("" ,"");
 var  row, i, sDescription;
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sDescription = row["Description"];
    cboProjectComponent.addItem(sDescription,sDescription);
  }
  cboProjectComponent.setIndex(0);
 // load project components
 var  sqlList;
 sqlList = [];
  query = "SELECT Description FROM Project_Stage ORDER BY Description;";
  sqlList[0] = [query, LoadProjectStage];
  Sql(dbObj, sqlList);
return savethefunction_rvar; }

function LoadProjectStage(transaction, results) { savethefunction_rvar="";
  cboProjectStage.clear();
  cboProjectStage.addItem("" ,"");
 var  row, i, sDescription;
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sDescription = row["Description"];
    cboProjectStage.addItem(sDescription,sDescription);
  }
  cboProjectStage.setIndex(0);
  ReadProject();
return savethefunction_rvar; }

function ReadProject() { savethefunction_rvar="";
 var  stable, sprimarykey, sID, sfields, i, spvalues, skey, svalues, sqlRead;
  for   (i = 1; i  <= 14; i ++) {
    mProject.setValue(i,"");
  }
  stable = localStorage.getItem("table");
  sprimarykey = localStorage.getItem("primarykey");
  sID = localStorage.getItem("id");
  sfields = localStorage.getItem("fields");
  if(IsNull(stable)==True ) { stable = ""; }
  if(IsNull(sprimarykey)==True ) { sprimarykey=""; }
  if(IsNull(sID)==True ) { sfields=""; }
  if(IsNull(sID)==True ) { sfields=""; }
  if(sID == "-1" )  { return savethefunction_rvar; }
  skey = stable  +  "*"  +  sID;
  localStorage.setItem(skey,"");
  query = "select * from ["  +  stable  +  "] where ["  +  sprimarykey  +  "] = "  +  sID  +  ";";
  sqlRead = [];
  sqlRead[0] = [query, ReadProjectH, ReadProjectE];
  Sql(dbObj, sqlRead);
return savethefunction_rvar; }

function ReadProjectH(transaction, results) { savethefunction_rvar="";
 var  stable, spk, svalue, sfields, skey, spfields, ftot, row, rtot, fcnt, fstr, fvalue, sout;
  stable = localStorage.getItem("table");
  spk = localStorage.getItem("primarykey");
  svalue = localStorage.getItem("id");
  sfields = localStorage.getItem("fields");
  switch (True) {
  case ((stable) == "Portfolio"):
	break;
  case ((stable) == "Workstream"):
	break;
  case ((stable) == "Projects"):
    sfields = sfields  +  ",CategoryName,Sponsor,ComponentName,StageName,Resources";
  }
  if(IsNull(stable)==True )  { return savethefunction_rvar; }
  if(IsNull(spk)==True )  { return savethefunction_rvar; }
  if(IsNull(svalue)==True )  { return savethefunction_rvar; }
  if(IsNull(sfields)==True )  { return savethefunction_rvar; }
  sout = "";
  skey = stable  +  "*"  +  svalue;
  rtot = results.rows.length - 1;
  if(_jsCint(rtot) == -1 )  { return savethefunction_rvar; }
  row = results.rows.item(0);
  spfields = Split(sfields,",");
  ftot = spfields.length - 1;
  for   (fcnt = 0; fcnt  <= ftot; fcnt ++) {
    fstr = spfields[fcnt];
    fvalue = row[fstr];
    if(IsNull(fvalue) == True ) { fvalue = ""; }
    sout = sout  +  fvalue  +  FM;
  }
  sout = RemoveDelim(sout,FM);
  localStorage.setItem(skey,sout);
  console.log(mProject.innerHTML);
  fvalue = Split(sout,FM);
  switch (True) {
  case ((stable) == "Portfolio"):
    $("#projectT h1").text("SAFIRI Mobile Project.Show > Maintain > Portfolio");
    mProjectL.innerHTML = Replace(mProjectL.innerHTML,"***Name***" ,"Portfolio");
 //0 ,1  ,2          ,3           ,4         ,5              ,6            ,7
 //ID,Wbs,Description,PlannedStart,PlannedEnd,PlannedDuration,DaysAvailable,ExpectedImage,
 //8          ,9     ,10         ,11         ,12                   ,13              ,14            ,15
 //BehindAhead,Budget,Expenditure,BudgetImage,PercentageExpenditure,ExpectedProgress,ActualProgress,PlannedProgress
    if(Len(fvalue[3] ) > 0 ) { fvalue[3] =  DbDateOut(fvalue[3] ); }
    if(Len(fvalue[4] ) > 0 ) { fvalue[4] =  DbDateOut(fvalue[4] ); }
    if(Len(fvalue[9] ) > 0 ) { fvalue[9] =  FormatNumber(fvalue[9] ,2); }
    if(Len(fvalue[10] ) > 0 ) { fvalue[10] =  FormatNumber(fvalue[10] ,2); }
    mProject.setValue(1,fvalue[0] ); // ID
    mProject.setValue(2,fvalue[1] ); // Wbs
    mProject.setValue(3,fvalue[2] ); // Description
    mProject.setValue(4,fvalue[3] ); // PlannedStart
    mProject.setValue(5,fvalue[4] ); // PlannedEnd
    mProject.setValue(6,fvalue[9] ); // Budget
    mProject.setValue(7,fvalue[10] ); // Expenditure
    mProject.setValue(8,fvalue[14]  +  "%"); // ActualProgress
    mProject.setValue(9,fvalue[15]  +  "%"); // PlannedProgress
 //mProject.setValue(10,ComboBoxDef())
 //mProject.setValue(11,"")
 //mProject.setValue(12,"")  
 //mProject.setValue(13,"")
 //mProject.setValue(14,"")
	break;
  case ((stable) == "Workstream"):
    $("#projectT h1").text("SAFIRI Mobile Project.Show > Maintain > Cluster");
    mProjectL.innerHTML = Replace(mProjectL.innerHTML,"***Name***" ,"Cluster");
 //0 ,1  ,2          ,3            ,4          ,5           ,6         ,7              ,8
 //ID,Wbs,Description,ExpectedImage,BudgetImage,PlannedStart,PlannedEnd,PlannedDuration,DaysAvailable,
 //9          ,10         ,11              ,12                   ,13              ,14                ,15
 //BehindAhead,TotalBudget,TotalExpenditure,PercentageExpenditure,ExpectedProgress,PercentageProgress,PlannedProgress
    if(Len(fvalue[5] ) > 0 ) { fvalue[5] =  DbDateOut(fvalue[5] ); }
    if(Len(fvalue[6] ) > 0 ) { fvalue[6] =  DbDateOut(fvalue[6] ); }
    if(Len(fvalue[10] ) > 0 ) { fvalue[10] =  FormatNumber(fvalue[10] ,2); }
    if(Len(fvalue[11] ) > 0 ) { fvalue[11] =  FormatNumber(fvalue[11] ,2); }
    mProject.setValue(1,fvalue[0] ); // ID
    mProject.setValue(2,fvalue[1] ); // Wbs
    mProject.setValue(3,fvalue[2] ); // Description
    mProject.setValue(4,fvalue[5] ); // PlannedStart
    mProject.setValue(5,fvalue[6] ); // PlannedEnd
    mProject.setValue(6,fvalue[10] ); // Budget
    mProject.setValue(7,fvalue[11] ); // Expenditure
    mProject.setValue(8,fvalue[14]  +  "%"); // ActualProgress
    mProject.setValue(9,fvalue[15]  +  "%"); // PlannedProgress
 //mProject.setValue(10,ComboBoxDef())
 //mProject.setValue(11,"")
 //mProject.setValue(12,"")  
 //mProject.setValue(13,"")
 //mProject.setValue(14,"")
	break;
  case ((stable) == "Projects"):
    $("#projectT h1").text("SAFIRI Mobile Project.Show > Maintain > Project");
    mProjectL.innerHTML = Replace(mProjectL.innerHTML,"***Name***" ,"Project");
 //0 ,1  ,2          ,3           ,4         ,5            ,6          ,7              ,8
 //ID,Wbs,ProjectName,PlannedStart,PlannedEnd,ExpectedImage,BudgetImage,PlannedDuration,DaysAvailable,
 //9          ,10    ,11         ,12                   ,13              ,14                ,15
 //BehindAhead,Budget,Expenditure,PercentageExpenditure,ExpectedProgress,PercentageProgress,PlannedProgress
 // 16         ,17     ,18           ,19       ,20
 //CategoryName,Sponsor,ComponentName,StageName,Resources
    if(Len(fvalue[3] ) > 0 ) { fvalue[3] =  DbDateOut(fvalue[3] ); }
    if(Len(fvalue[4] ) > 0 ) { fvalue[4] =  DbDateOut(fvalue[4] ); }
    if(Len(fvalue[10] ) > 0 ) { fvalue[10] =  FormatNumber(fvalue[10] ,2); }
    if(Len(fvalue[11] ) > 0 ) { fvalue[11] =  FormatNumber(fvalue[11] ,2); }
    mProject.setValue(1,fvalue[0] ); // ID
    mProject.setValue(2,fvalue[1] ); // Wbs
    mProject.setValue(3,fvalue[2] ); // ProjectName
    mProject.setValue(4,fvalue[3] ); // PlannedStart
    mProject.setValue(5,fvalue[4] ); // PlannedEnd
    mProject.setValue(6,fvalue[10] ); // Budget
    mProject.setValue(7,fvalue[11] ); // Expenditure
    mProject.setValue(8,fvalue[14]  +  "%"); // ActualProgress
    mProject.setValue(9,fvalue[15]  +  "%"); // PlannedProgress
    cboProjectCategory.setText(fvalue[16] );
    mProject.setValue(11,fvalue[17] ); // Sponsor
    cboProjectComponent.setText(fvalue[18] );
    cboProjectStage.setText(fvalue[19] );
    mProject.setValue(14,fvalue[20] ); // Resources
  }
return savethefunction_rvar; }

function ReadProjectE(transaction, results) { savethefunction_rvar="";
  NSB.MsgBox("SQL Error: "  +  results.code  +  ": "  +  results.message);
return savethefunction_rvar; }

function SaveProject() { savethefunction_rvar="";
 var  stable, spk;
 var  sID,sWbs,sDescription,sPlannedStart,sPlannedEnd;
 var  sBudget,sExpenditure,sPercentageExpenditure,sPercentageProgress,sPlannedProgress;
 var  sCategoryName,sSponsor,sComponentName,sStageName,sResources;
  stable = localStorage.getItem("table");
  spk = localStorage.getItem("primarykey");
  sID =  mProject.getValue(1);
  sWbs = mProject.getValue(2);
  sDescription =  mProject.getValue(3);
  sPlannedStart=  mProject.getValue(4);
  sPlannedEnd =  mProject.getValue(5);
  sBudget=  mProject.getValue(6);
  sExpenditure =  mProject.getValue(7);
  sPercentageProgress = mProject.getValue(8);
  sPlannedProgress = mProject.getValue(9);
  sCategoryName = cboProjectCategory.selectedItem();
  sSponsor =  mProject.getValue(11);
  sComponentName = cboProjectComponent.selectedItem();
  sStageName = cboProjectStage.selectedItem();
  sResources =  mProject.getValue(14);
  switch (True) {
  case ((stable) == "Portfolio"):
	break;
  case ((stable) == "Workstream"):
	break;
  case ((stable) == "Projects"):
  }
return savethefunction_rvar; }

window.addEventListener('load', function() {
  frmDashboardSelector.style.display = 'block';
  NSB.List_jqm_init('dashboardL','',true,'100%',false);
  dashboardL_ref = new iScroll('dashboardL_scroller',{ bounce:true, zoom:false });
  dashboardL.refresh=function(){if (typeof dashboardL_ref!='undefined') setTimeout(NSB.refresh,100,dashboardL_ref)};
  NSB.addProperties(dashboardL, dashboardL_scroller);

(function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('dashboardL_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
  NSB.addProperties(dashboardT);
  NSB.addDisableProperty(dashboardT);


  if(typeof(dashboardT.onclick)=='function'){
    if(typeof(dashboardT_left)!='undefined') dashboardT_left.onclick=function() {dashboardT.onclick(dashboardT_left.getAttribute('nsbvalue'))};
    if(typeof(dashboardT_right)!='undefined') dashboardT_right.onclick=function() {dashboardT.onclick(dashboardT_right.getAttribute('nsbvalue'))}};
  frmDashboardSelector.style.display = 'none';
}, false);
frmDashboardSelector.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(frmDashboardSelector);
dashboardL.onclick = function(i) { savethefunction_rvar="";
  if(TypeName(i) == "object" )  { return savethefunction_rvar; }
 var  strItem;
  strItem = dashboardL.getItem(i);
  switch (True) {
  case ((strItem) == "Projects Dashboard"):
    ChangeForm(frmProjectSelector);
	break;
  case ((strItem) == "Clusters Dashboard"):
    localStorage.setItem("portfolio" , "");
    ChangeForm(frmPortfolioSelector);
	break;
  case ((strItem) == "Portfolio Dashboard"):
    catFrom = "";
    localStorage.setItem("portfolio" , "");
    localStorage.setItem("table" , "Portfolio");
    localStorage.setItem("primarykey" , "ID");
    localStorage.setItem("fields" ,"ID,Wbs,Description,PlannedStart,PlannedEnd,PlannedDuration,DaysAvailable,ExpectedImage,BehindAhead,Budget,Expenditure,BudgetImage,PercentageExpenditure,ExpectedProgress,ActualProgress,PlannedProgress");
    localStorage.setItem("headers" ,"ID,Wbs,Name,Start,Finish,Duration,Days Available,Behind/Ahead,Budget (M),Expenditure (M),% Expenditure,% Expected,% Progress,% Planned,Edit,Clone,Delete");
    ChangeForm(frmDashboard);
  }
return savethefunction_rvar; }

dashboardT.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Home"):
    ChangeForm(frmMainMenu);
  }
return savethefunction_rvar; }

frmDashboardSelector.onshow = function() { savethefunction_rvar="";
  ResizeHeaderList(frmDashboardSelector,dashboardT,dashboardL);
  InitializeList(dashboardL,"Portfolio Dashboard,Clusters Dashboard,Projects Dashboard" ,"," ,True);
return savethefunction_rvar; }


function TableSearch(searchvalues,strsearch,delim) {
   // return the position of a table name within a multi value string
   // usage e.g. tbpos = TableSearch("table1,table2,table3","table0",","), will return -1 as table0 is not
   // part of the mv string
   if(Len(searchvalues)==0 ) { return -1; }
   var spvalues, i, itot, ivalue;
   spvalues = Split(searchvalues,delim);
   strsearch = LCase(strsearch);
   itot = spvalues.length - 1;
   for   (i = 0; i  <= itot; i ++) {
    ivalue = spvalues[i];
    ivalue = LCase(ivalue);
    if(ivalue == strsearch ) { return i; }
  }
  return -1;
}

function SQLExportSpecific(db, dbname, mytables, rebuild, callback) {
    // convert a SQLite database schema to JSON
    //
    // db is the db to export
    // dbname is the name of the database
    // mytables is the multi-value string delimited by comma of the tables to export
    // rebuild is the True/False variable to drop and recreate the tables, if you dont want the tables to be
    // recreated this should be false
    // callback is a function of one argument that recieves the JSON
    //
    // Limitations:
    // - BLOB data will probably not export properly, or not import properly
    // - Foreign keys are not taken into account when exporting/importing
    var item, tbPos, tbName
        totalRows = 0,
        processedRows = 0,
        masterSql = 'SELECT name, sql, type FROM sqlite_master WHERE sql IS NOT NULL',
        schema = {
            'dbname': db.name || dbname || 'default',
            'dbver': db.version,
            'ddl': {
                'drops': [],
                'tables': [],
                'creates': []               
            },
            'dml': []
        };

    db.transaction(function(tx) {
        tx.executeSql(masterSql, [], function(tx, result) {
            for (var i = 0; i < result.rows.length; i++) {
                item = result.rows.item(i);
                tbName = item['name'];
                tbPos = TableSearch(mytables, tbName, ",")
                if (tbPos !== -1) {
                if (item['name'] != '__WebKitDatabaseInfoTable__' && item['name'] != 'sqlite_sequence') {
                    if (rebuild == True) {schema.ddl.drops.push('DROP ' + item['type'] + ' IF EXISTS ' + item['name']);}
                    if (item['type'] === 'table') {
                        if (rebuild == True) {schema.ddl.tables.push(item['sql']);}
                        totalRows++;
                        tx.executeSql('SELECT * FROM ' + item['name'], [], (function(item) { 
                            return function(tx, result) {
                                var row,
                                    sql,
                                    sql1,
                                    sql2,
                                    params;

                                for (var i = 0; i < result.rows.length; i++) {
                                    row = result.rows.item(i);
                                    sql1 = 'INSERT OR REPLACE INTO ' + item['name'] + ' (';
                                    sql2 = ') VALUES (';
                                    params = []

                                    for (field in row) {
                                        sql1 += field + ', ';
                                        sql2 += '?, ';
                                        params.push(row[field]);
                                    }
                                    sql = sql1.slice(0, -2) + sql2.slice(0, -2) + ')';

                                    schema.dml.push({'sql': sql, 'params': params});
                                }

                                // only callback when we're done
                                if (callback && (++processedRows === totalRows)) callback(schema);
                            }; 
                        }(item)), NSB._sqlError('SELECT * FROM ' + item['name']));
                    } else {
                        schema.ddl.creates.push(item['sql']);
                    }
                }}
            }
        }, NSB._sqlError(masterSql));
    });

    return schema;
}

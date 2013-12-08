function AddCategory(scategory){savethefunction_rvar="";scategory=InSingleQuote(scategory);dbRecord=new Object();dbRecord["CategoryName"]=scategory;dbRecord["Transactions"]=0;InsertRecord("Categories",dbRecord);}
function AddCategories(scategory){savethefunction_rvar="";var spvalues;spvalues=Split(scategory,",");var rsTot,rsCnt;rsTot=spvalues.length-1;var scat,dbRecord;ResetInsertCommands();for(rsCnt=0;rsCnt<=rsTot;rsCnt++){scat=spvalues[rsCnt];scat=InSingleQuote(scat);dbRecord=new Object();dbRecord["CategoryName"]=scat;dbRecord["Transactions"]=0;InsertRecord1("Categories",dbRecord,rsCnt);}
ExecuteInsertCommands();}
function NewCategoryOk(transaction,results){savethefunction_rvar="";recid=results.rows.item(0)["MaxValue"];recid=recid+1;var dbRecord;dbRecord=new Object();var ncat;ncat=localStorage.getItem("newcategory");ncat=InSingleQuote(ncat);dbRecord["CategoryId"]=recid;dbRecord["CategoryName"]=ncat;dbRecord["Transactions"]=0;InsertRecord("Categories",dbRecord);return savethefunction_rvar;}
function Category(id,categoryname,transactions){savethefunction_rvar="";this.id=id;this.categoryname=categoryname;this.transactions=transactions;return savethefunction_rvar;}
function saveCategory(){savethefunction_rvar="";var s;sqlList=[];s=Join([this.id,"'"+this.categoryname+"'",this.transactions],",");sqlList[0]=["INSERT INTO Categories (CategoryId, CategoryName, Transactions) VALUES ( "+s+");",saveCatOk,saveCatError];Sql(dbObj,sqlList);return savethefunction_rvar;}
function saveCatOk(transaction,result){savethefunction_rvar="";NSB.MsgBox("Category successfully saved.");return savethefunction_rvar;}
function saveCatError(transaction,result){savethefunction_rvar="";NSB.MsgBox("SQL Error: "+result.code+": "+result.message);return savethefunction_rvar;}
Category.prototype.save=saveCategory;function Categories_CreateTable(){var tbls;tbls=new Object();tbls["CategoryId"]="integer";tbls["CategoryName"]="text";tbls["Transactions"]="integer";CreateTable("Categories",tbls,"CategoryId","CategoryId");CreateTableIndexes("Categories","CategoryName,Transactions");}
function CategoryMovement_CreateTable(){var tbls;tbls=new Object();tbls["Id"]="text";tbls["AccountId"]="integer";tbls["AccountName"]="text";tbls["YearOn"]="integer";tbls["TypeOf"]="text";tbls["BudgetJan"]="float";tbls["BudgetFeb"]="float";tbls["BudgetMar"]="float";tbls["BudgetApr"]="float";tbls["BudgetMay"]="float";tbls["BudgetJun"]="float";tbls["BudgetJul"]="float";tbls["BudgetAug"]="float";tbls["BudgetSep"]="float";tbls["ActualApr"]="float";tbls["ActualMay"]="float";tbls["ActualJun"]="float";tbls["ActualJul"]="float";tbls["ActualAug"]="float";tbls["ActualSep"]="float";tbls["ActualMar"]="float";tbls["ActualOct"]="float";tbls["ActualNov"]="float";tbls["ActualDec"]="float";tbls["Actual"]="float";tbls["ActualFeb"]="float";tbls["BudgetOct"]="float";tbls["BudgetNov"]="float";tbls["BudgetDec"]="float";tbls["Budget"]="float";tbls["ActualJan"]="float";CreateTable("Category_Movement",tbls,"Id","");CreateTableIndexes("Category_Movement","AccountId,AccountName,YearOn,TypeOf,Actual,Budget");}
function Trial_CreateTable(){var tbls;tbls=new Object();tbls["IMEI"]="text";tbls["Runs"]="integer";CreateTable("Trial",tbls,"IMEI","");CreateTableIndexes("Trial","Runs");}
window.addEventListener('load',function(){InvestPayOff.style.display='block';NSB.MultiInput_init('miInvestPay');NSB.addProperties(miInvestPay);NSB.addProperties(invpayTitle);NSB.addDisableProperty(invpayTitle);if(typeof(invpayTitle.onclick)=='function'){if(typeof(invpayTitle_left)!='undefined')invpayTitle_left.onclick=function(){invpayTitle.onclick(invpayTitle_left.getAttribute('nsbvalue'))};if(typeof(invpayTitle_right)!='undefined')invpayTitle_right.onclick=function(){invpayTitle.onclick(invpayTitle_right.getAttribute('nsbvalue'))}};NSB.MultiInput_init('invpayOutput');NSB.addProperties(invpayOutput);InvestPayOff.style.display='none';},false);InvestPayOff.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};NSB.addProperties(InvestPayOff);var invStep;invpayTitle.onclick=function(choice){savethefunction_rvar="";if(TypeName(choice)=="object"){return savethefunction_rvar;}
switch(True){case((choice)=="Back"):switch(True){case((invStep)==2):ShowHideStep1(True);ShowHideStep2(False);break;default:ChangeForm(WhatToDo);break;}
break;case((choice)=="Next"):InvPayCalculate();}
return savethefunction_rvar;}
function ShowHideStep2(bOp){if(bOp==True){invStep=2;}
invpayOutput.Top=42;invpayOutput.Left=0;invpayOutput.Visible=bOp;}
function ShowHideStep1(bOp){if(bOp==True){invStep=1;}
miInvestPay.Top=42;miInvestPay.Left=0;miInvestPay.Visible=bOp;}
InvestPayOff.onshow=function(){savethefunction_rvar="";InvPayClear();ShowHideStep1(True);ShowHideStep2(False);return savethefunction_rvar;}
function InvPayCalculate(){var sloanamount;sloanamount=parseFloat(ProperAmount(miInvestPay.getValue(1)));var sairloan;sairloan=_jsCint(miInvestPay.getValue(2));var sairinvest;sairinvest=_jsCint(miInvestPay.getValue(3));var staxoninterest;staxoninterest=_jsCint(miInvestPay.getValue(4));var sloanyears;sloanyears=_jsCint(miInvestPay.getValue(5));var speriodofinvest;speriodofinvest=_jsCint(miInvestPay.getValue(6));var sextramonthlypayment;sextramonthlypayment=parseFloat(ProperAmount(miInvestPay.getValue(7)));var smonthlyinvestamount;smonthlyinvestamount=sextramonthlypayment;var sair;sair=sairloan;var i5,i6,i7;var d5,d6,d7,d8,d9,d10;d5=parseFloat(sloanamount);d6=parseFloat(sairloan)/100;d7=parseFloat(sairinvest)/100;d8=parseFloat(staxoninterest)/100;d9=_jsCint(sloanyears);d10=parseFloat(sextramonthlypayment);i5=parseFloat(smonthlyinvestamount);i6=_jsCint(sair);i7=_jsCint(speriodofinvest);if(parseFloat(sloanamount)==0){NSB.MsgBox("The loan amount must be greater than zero!");miInvestPay.focus();return;}
if(_jsCint(sairloan)==0){NSB.MsgBox("The annual interest rate for the loan must be greater than zero!");miInvestPay.focus();return;}
if(_jsCint(sairinvest)==0){NSB.MsgBox("The annual interest rate for the investment must be greater than zero!");miInvestPay.focus();return;}
if(_jsCint(sairinvest)==0){NSB.MsgBox("The annual interest rate for the investment must be greater than zero!");miInvestPay.focus();return;}
if(_jsCint(sloanyears)==0){NSB.MsgBox("The term of the loan in years must be greater than zero!");miInvestPay.focus();return;}
if(_jsCint(speriodofinvest)==0){NSB.MsgBox("The investment term in years must be greater than zero!");miInvestPay.focus();return;}
if(parseFloat(sextramonthlypayment)==0){NSB.MsgBox("The extra monthly payments must be greater than zero!");miInvestPay.focus();return;}
var d14,d15,d16,d17,d18;var e14,e15,e16,e17,e18;ShowHideStep1(False);ShowHideStep2(True);}
function InvPayClear(){miInvestPay.setValue(1,"0.00");miInvestPay.setValue(2,"0");miInvestPay.setValue(3,"0");miInvestPay.setValue(4,"0");miInvestPay.setValue(5,"0");miInvestPay.setValue(6,"0");miInvestPay.setValue(7,"0.00");miInvestPay.focus();}
window.addEventListener('load',function(){Budgets.style.display='block';NSB.addProperties(budgetsTitle);NSB.addDisableProperty(budgetsTitle);if(typeof(budgetsTitle.onclick)=='function'){if(typeof(budgetsTitle_left)!='undefined')budgetsTitle_left.onclick=function(){budgetsTitle.onclick(budgetsTitle_left.getAttribute('nsbvalue'))};if(typeof(budgetsTitle_right)!='undefined')budgetsTitle_right.onclick=function(){budgetsTitle.onclick(budgetsTitle_right.getAttribute('nsbvalue'))}};if(typeof txtBudgetYear==='undefined')txtBudgetYear=document.getElementById('txtBudgetYear')
txtBudgetYear.addEventListener('touchmove',function(e){e.stopPropagation();},false);NSB.addProperties(txtBudgetYear,$('#txtBudgetYear_wrapper > div')[0]);NSB.addDisableProperty(txtBudgetYear)
delete cboBudgetAccount.childNodes[0];NSB.ComboBox_init('cboBudgetAccount');NSB.addProperties(cboBudgetAccount);NSB.MultiInput_init('miBudgets1');NSB.addProperties(miBudgets1);NSB.MultiInput_init('miBudgets2');NSB.addProperties(miBudgets2);NSB.MultiInput_init('budgetsInput');NSB.addProperties(budgetsInput);NSB.MultiInput_init('MultiInput3');NSB.addProperties(MultiInput3);Budgets.style.display='none';},false);Budgets.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};NSB.addProperties(Budgets);budgetsTitle.onclick=function(choice){savethefunction_rvar="";if(TypeName(choice)=="object"){return savethefunction_rvar;}
switch(True){case((choice)=="Back"):ChangeForm(MyAccounts);break;case((choice)=="Next"):}
return savethefunction_rvar;}
Budgets.onshow=function(){savethefunction_rvar="";txtBudgetYear.style.zIndex=1;cboBudgetAccount.style.zIndex=1;return savethefunction_rvar;}
var dbName;var dbObj;var cmData;var cmSource,cmDataAdapter,catKey;var catFrom,catYear,catName,acctFrom;var sqlList,rCnt,payYear,query;var payMonth,payBy,chartPer,payAccount;var dailyPayments,recid,isnew;var DB_REAL="REAL";var DB_INTEGER="INTEGER";var DB_BLOB="BLOB";var DB_TEXT="TEXT";var DB_FLOAT="FLOAT";var DB_NUMERIC="NUMERIC";var VM=Chr(253);var InsertCommands;var UpdateCommands;var monthlysummaryB;var monthlysummaryC;var dbExport;var dbJSON;var dbImport;function InitializeList(lstname,stritems,delim,bclear){var spitems,rscnt,rstot,stritem;if(bclear==True){lstname.deleteItem("all");}
spitems=Split(stritems,delim);rstot=spitems.length-1;for(rscnt=0;rscnt<=rstot;rscnt++){stritem=spitems[rscnt];lstname.addItem(stritem);}
lstname.refresh();}
function ResizeHeaderList(form,header,child){child.Left=0;child.Top=header.Height;child.Height=form.Height-header.Height;child.refresh();}
function MvRemoteItem(strmv,sremove,delim){savethefunction_rvar="";sremove=LCase(sremove);var sout,lendelim;sout="";var spv;spv=Split(strmv,delim);var stot,scnt,sitem;lendelim=Len(delim);stot=spv.length-1;for(scnt=0;scnt<=stot;scnt++){sitem=LCase(spv[scnt]);if(sitem!=sremove){sout=sout+spv[scnt]+delim;}}
sout=Left(sout,Len(sout)-lendelim);return sout;return savethefunction_rvar;}
function MvSearch(searchvalues,strsearch,delim){savethefunction_rvar="";if(Len(searchvalues)==0){return-1;}
var spvalues,i,itot,ivalue;spvalues=Split(searchvalues,delim);itot=spvalues.length-1;for(i=0;i<=itot;i++){ivalue=spvalues[i];if(ivalue==strsearch){return i;}}
return-1;return savethefunction_rvar;}
function DbDateOut(sDate){savethefunction_rvar="";var xToday;xToday=CDate(sDate);xToday=FormatDateTime(xToday,"DD/MM/YYYY");return xToday;return savethefunction_rvar;}
function DbDateOut1(sDate){savethefunction_rvar="";var xToday;xToday=CDate(sDate);xToday=FormatDateTime(xToday,"YYYYMMDD");return xToday;return savethefunction_rvar;}
function ToDay(){savethefunction_rvar="";return FormatDateTime(dateadd("s",0,new Date()),"DD/MM/YYYY");return savethefunction_rvar;}
function ToDay1(){savethefunction_rvar="";return FormatDateTime(dateadd("s",0,new Date()),"YYYYMMDD");return savethefunction_rvar;}
function MvField(svalue,iposition,delimiter){savethefunction_rvar="";var mvalues,tvalues,xvalue;mvalues=Split(svalue,delimiter);tvalues=mvalues.length-1;iposition=iposition-1;if(iposition<=-1){xvalue=mvalues[tvalues];return xvalue;}
if(iposition>tvalues){return"";}
xvalue=mvalues[iposition];return xvalue;return savethefunction_rvar;}
function MvRest(svalue,iposition,delimiter){savethefunction_rvar="";var mvalues,tvalues,xvalue,x,y,resultx;var lendelim;lendelim=Len(delimiter);mvalues=Split(svalue,delimiter);tvalues=mvalues.length-1;iposition=iposition-1;if(iposition<=-1){xvalue=mvalues[tvalues];return xvalue;}
if(iposition>tvalues){return"";}
resultx="";x=iposition+1;for(y=x;y<=tvalues;y++){xvalue=mvalues[y];resultx=resultx+xvalue+delimiter;}
resultx=Left(resultx,Len(resultx)-lendelim);return resultx;return savethefunction_rvar;}
function MakeMoney(svalue){savethefunction_rvar="";svalue=ProperAmount(svalue);svalue=FormatNumber(svalue);return svalue;return savethefunction_rvar;}
function ProperAmount(svalue){savethefunction_rvar="";svalue=Replace(svalue,",","");dpos=InStr(1,svalue,".");if(dpos==0){svalue=svalue+".00";}
return svalue;return savethefunction_rvar;}
function InSingleQuote(strV){savethefunction_rvar="";return"'"+strV+"'";}
function MonthNames(intM){savethefunction_rvar="";return MonthName(intM,True);return savethefunction_rvar;}
function MonthNumber(strM){savethefunction_rvar="";strM=LCase(strM);switch(True){case((strM)=="jan"):return 1;break;case((strM)=="feb"):return 2;break;case((strM)=="mar"):return 3;break;case((strM)=="apr"):return 4;break;case((strM)=="may"):return 5;break;case((strM)=="jun"):return 6;break;case((strM)=="jul"):return 7;break;case((strM)=="aug"):return 8;break;case((strM)=="sep"):return 9;break;case((strM)=="oct"):return 10;break;case((strM)=="nov"):return 11;break;case((strM)=="dec"):return 12;}
return savethefunction_rvar;}
function Main(){dbName="projectshow.db";NSB.MsgBoxStyle="";dbObj=SqlOpenDatabase(dbName);if(dbObj==0){NSB.MsgBox("Error opening db");}
Trial_CreateTable();sqlList=[];}
function SetHeaderTitle(hdObj,hdTitle){var shd;shd="#"+hdObj+" h1";$(shd).text(hdTitle);}
function GridRowColColour(grdName,rowPos,colPos,colour){grdName.cell(rowPos,colPos).style.color=colour;grdName.refresh();}
function GridRowColBackgroundColour(grdName,rowPos,colPos,colour){grdName.cell(rowPos,colPos).style.backgroundColor=colour;grdName.refresh();}
function GridRowColor(grdName,rowPos,colour){var grdCols,i;grdCols=grdName.getColCount();for(i=0;i<=grdCols-1;i++){grdName.cell(rowPos,i).style.color=color;}
grdName.refresh();}
function GridCenterAlign(grdName,startCol,endCol){var grdRows,i;grdRows=grdName.getRowCount();for(i=1;i<=grdRows-1;i++){for(col=startCol;col<=endCol;col++){grdName.cell(i,col).style.textAlign="center";}}
grdName.refresh();}
function GridRightAlign(grdName,startCol,endCol){var grdRows,i;grdRows=grdName.getRowCount();for(i=1;i<=grdRows-1;i++){for(col=startCol;col<=endCol;col++){grdName.cell(i,col).style.textAlign="right";}}
grdName.refresh();}
function GridSetHeight(grdName,grdRowHeight){var grdRows,i;grdRows=grdName.getRowCount();for(i=1;i<=grdRows-1;i++){grdName.setRowHeight(i,grdRowHeight);}
grdName.refresh();}
function GridBoldRow(grdName,rowPos){var grdCols,i;grdCols=grdName.getColCount();for(i=0;i<=grdCols-1;i++){grdName.cell(rowPos,i).style.fontWeight="bold";}
grdName.refresh();}
function GridAlternateColor(grdName){var grdRows,grdCols,i;grdRows=grdName.getRowCount();grdCols=grdName.getColCount();for(i=1;i<=grdRows-1;i++){for(col=0;col<=grdCols-1;col++){if((Math.abs(i)%2)==1){grdName.cell(i,col).style.backgroundColor=RGB(255,255,240);}else{grdName.cell(i,col).style.backgroundColor=RGB(240,248,255);}}}
grdName.refresh();}
function InsertRecord(tblName,tblRecord){savethefunction_rvar="";var sqlInst;sqlInst=[];var flds,vals;flds="";vals="";for(item in tblRecord){flds=flds+"["+item+"],";vals=vals+tblRecord[item]+",";}
flds=Left(flds,Len(flds)-1);vals=Left(vals,Len(vals)-1);sqlInst[0]="INSERT OR REPLACE INTO ["+tblName+"] ("+flds+") VALUES ("+vals+");";Sql(dbObj,sqlInst);return savethefunction_rvar;}
function InsertRecord1(tblName,tblRecord,position){savethefunction_rvar="";var flds,vals;flds="";vals="";for(item in tblRecord){flds=flds+"["+item+"],";vals=vals+tblRecord[item]+",";}
flds=Left(flds,Len(flds)-1);vals=Left(vals,Len(vals)-1);InsertCommands[position]="INSERT INTO ["+tblName+"] ("+flds+") VALUES ("+vals+");";return savethefunction_rvar;}
function CreateTable(TableName,FieldsAndTypes,PrimaryKey,AutoIncrement){savethefunction_rvar="";var sb,fdef,sqlCreate;sb="(";for(item in FieldsAndTypes){fdef="["+item+"] "+UCase(FieldsAndTypes[item]);sb=sb+fdef;if(item==PrimaryKey){sb=sb+" NOT NULL PRIMARY KEY";}
if(item==AutoIncrement){sb=sb+" AUTOINCREMENT";}
sb=sb+", ";}
sb=Left(sb,Len(sb)-2);sb=sb+")";sb="CREATE TABLE IF NOT EXISTS ["+TableName+"] "+sb+";";sqlCreate=[];sqlCreate[0]=sb;Sql(dbObj,sqlCreate);}
function CreateTableIndexes(TableName,Indexes){savethefunction_rvar="";var sb,idef,sqlCreateIdx;var spidx,idxtot,idxcnt,idx;spidx=Split(Indexes,",");idxtot=spidx.length-1;sqlCreateIdx=[];for(idxcnt=0;idxcnt<=idxtot;idxcnt++){idx=spidx[idxcnt];idef="CREATE INDEX IF NOT EXISTS ["+idx+"] ON ["+TableName+"] (["+idx+"]);";sqlCreateIdx[idxcnt]=idef;}
Sql(dbObj,sqlCreateIdx);}
function ResetInsertCommands(){savethefunction_rvar="";InsertCommands=[];}
function ExecuteInsertCommands(){savethefunction_rvar="";Sql(dbObj,InsertCommands);return savethefunction_rvar;}
function ExecuteUpdateCommands(){savethefunction_rvar="";Sql(dbObj,UpdateCommands);return savethefunction_rvar;}
function MvSum(strvalues,delim){savethefunction_rvar="";var dtot,i;dtot=0;var spvalues;spvalues=Split(strvalues,delim);var dlen;dlen=spvalues.length-1;for(i=0;i<=dlen;i++){dtot=parseFloat(dtot)+parseFloat(spvalues[i]);}
dtot=Round(dtot,2);return dtot;return savethefunction_rvar;}
function DeleteTable(tblName){savethefunction_rvar="";var sqlD;sqlD=[];sqlD[0]=["DROP TABLE IF EXISTS ["+tblName+"];"];Sql(dbObj,sqlD);return savethefunction_rvar;}
function UpdateRecord(tblName,tblRecord,tblWhere){savethefunction_rvar="";var sqlUpd;sqlUpd=[];var vals,wvals;vals="";wvals="";for(item in tblRecord){vals=vals+"["+item+"] = "+tblRecord[item]+",";}
vals=Left(vals,Len(vals)-1);for(item in tblWhere){wvals=wvals+"["+item+"] = "+tblWhere[item]+",";}
wvals=Left(wvals,Len(wvals)-1);sqlUpd[0]="UPDATE OR REPLACE ["+tblName+"] SET "+vals+" WHERE "+wvals+";";Sql(dbObj,sqlUpd);return savethefunction_rvar;}
function UpdateRecords(tblName,tblRecord){savethefunction_rvar="";var sqlUpd,vals;sqlUpd=[];vals="";for(item in tblRecord){vals=vals+"["+item+"] = "+tblRecord[item]+",";}
vals=Left(vals,Len(vals)-1);sqlUpd[0]="UPDATE ["+tblName+"] SET "+vals+";";Sql(dbObj,sqlUpd);return savethefunction_rvar;}
function DeleteRecord(tblName,tblWhere){savethefunction_rvar="";var sqlUpd;sqlUpd=[];var wvals;wvals="";for(item in tblWhere){wvals=wvals+"["+item+"] = "+tblWhere[item]+",";}
wvals=Left(wvals,Len(wvals)-1);sqlUpd[0]="DELETE FROM ["+tblName+"] WHERE "+wvals+";";Sql(dbObj,sqlUpd);return savethefunction_rvar;}
function DeleteRecords(tblName){savethefunction_rvar="";var sqlDel;sqlDel=[];sqlDel[0]="DELETE FROM ["+tblName+"];";Sql(dbObj,sqlDel);return savethefunction_rvar;}
function UpdateRecord1(tblName,tblRecord,tblWhere,position){savethefunction_rvar="";var vals,wvals;vals="";wvals="";for(item in tblRecord){vals=vals+"["+item+"] = "+tblRecord[item]+",";}
vals=Left(vals,Len(vals)-1);for(item in tblWhere){wvals=wvals+"["+item+"] = "+tblWhere[item]+",";}
wvals=Left(wvals,Len(wvals)-1);UpdateCommands[position]="UPDATE OR REPLACE ["+tblName+"] SET "+vals+" WHERE "+wvals+";";return savethefunction_rvar;}
function ComboIndexOf(cboBox,cboSearch){savethefunction_rvar="";var cboOut;cboOut=-1;var cboTot;cboTot=cboBox.getItemCount();var xItem,i;for(i=0;i<=cboTot-1;i++){xItem=cboBox.List(i);if(xItem==cboSearch){return i;}}
return cboOut;return savethefunction_rvar;}
function GridDefault(grdName){savethefunction_rvar="";GridSetHeight(grdName,"32px");GridAlternateColor(grdName);return savethefunction_rvar;}
function GridAddRow(grdName,colValues,delim,rowPos){savethefunction_rvar="";var vTot,spvalues,i;spvalues=Split(colValues,delim);vTot=spvalues.length;grdName.addRows(1);for(i=0;i<=vTot-1;i++){grdName.setValue(rowPos,i,spvalues[i]);}
return savethefunction_rvar;}
function GridAddNextRow(grdName,colValues,delim){savethefunction_rvar="";var vTot,rowPos,spvalues,i;rowPos=grdName.getRowCount();spvalues=Split(colValues,delim);vTot=spvalues.length;grdName.addRows(1);for(i=0;i<=vTot-1;i++){grdName.setValue(rowPos,i,spvalues[i]);}
return savethefunction_rvar;}
function GridAddImage(grdName,rowPos,colPos,imgName){savethefunction_rvar="";var imgID,imgDef;imgID=grdName+"_"+rowPos+"_"+colPos;imgDef="<img width=25px height=25px style=cursor:pointer src='"+imgName+"' id='"+imgID+"'>";grdName.setValue(rowPos,colPos,imgDef);return savethefunction_rvar;}
function GridAddTextImage(grdName,rowPos,colPos,text,img){savethefunction_rvar="";var imgDef,imgID;imgID=grdName+"_"+rowPos+"_"+colPos;imgDef=text+"<img src='"+img+"' align='right' id='"+imgID+"'>";grdName.setValue(rowPos,colPos,imgDef);return savethefunction_rvar;}
function GridAddTextImageDefinition(grdName,rowPos,colPos,text,img){savethefunction_rvar="";var imgDef,imgID;imgID=grdName+"_"+rowPos+"_"+colPos;imgDef=text+"  <img width=20px height=20px src='"+img+"' align='right' id='"+imgID+"'>";return imgDef;return savethefunction_rvar;}
function GridAddImageDefinition(grdName,rowPos,colPos,imgName){savethefunction_rvar="";var imgID,imgDef;imgID=grdName+"_"+rowPos+"_"+colPos;imgDef="<img width=25px height=25px style=cursor:pointer src='"+imgName+"' id='"+imgID+"'>";return imgDef;return savethefunction_rvar;}
function GridAddImageDefinitionAction(grdName,grdAction,grdId,imgName){savethefunction_rvar="";var imgID,imgDef;imgID=grdName+"_"+grdAction+"_"+grdId;imgDef="<img width=25px height=25px style=cursor:pointer src='"+imgName+"' id='"+imgID+"'>";return imgDef;return savethefunction_rvar;}
function GridAddImageDelete(grdName,rowPos,colPos){savethefunction_rvar="";GridAddImage(grdName,rowPos,colPos,"delete.png");return savethefunction_rvar;}
function GridAddImageEdit(grdName,rowPos,colPos){savethefunction_rvar="";GridAddImage(grdName,rowPos,colPos,"edit.png");return savethefunction_rvar;}
function GridAddImageChart(grdName,rowPos,colPos){savethefunction_rvar="";GridAddImage(grdName,rowPos,colPos,"chart.png");return savethefunction_rvar;}
function GridAddImageView(grdName,rowPos,colPos){savethefunction_rvar="";GridAddImage(grdName,rowPos,colPos,"view.png");return savethefunction_rvar;}
function GridAddImagePayTo(grdName,rowPos,colPos){savethefunction_rvar="";GridAddImage(grdName,rowPos,colPos,"payto.png");return savethefunction_rvar;}
function GridAddImageDrillDown(grdName,rowPos,colPos){savethefunction_rvar="";GridAddImage(grdName,rowPos,colPos,"drill.png");return savethefunction_rvar;}
function GridAddImageDuplicate(grdName,rowPos,colPos){savethefunction_rvar="";GridAddImage(grdName,rowPos,colPos,"duplicate.png");return savethefunction_rvar;}
function GridAddImageReverse(grdName,rowPos,colPos){savethefunction_rvar="";GridAddImage(grdName,rowPos,colPos,"reverse.png");return savethefunction_rvar;}
function email(t,subject,body){savethefunction_rvar="";location="mailto:"+encodeURI(t)+"?subject="+encodeURI(subject)+"&body="+encodeURI(body);return savethefunction_rvar;}
function phone(tel){savethefunction_rvar="";location="tel:"+tel;return savethefunction_rvar;}
function skype(tel){savethefunction_rvar="";location="skype:"+tel;return savethefunction_rvar;}
function sms(tel,body){savethefunction_rvar="";location="sms:"+tel+"?body="+encodeURL(body);return savethefunction_rvar;}
window.addEventListener('load',function(){frmSignIn.style.display='block';NSB.addProperties(signInT);NSB.addDisableProperty(signInT);if(typeof(signInT.onclick)=='function'){if(typeof(signInT_left)!='undefined')signInT_left.onclick=function(){signInT.onclick(signInT_left.getAttribute('nsbvalue'))};if(typeof(signInT_right)!='undefined')signInT_right.onclick=function(){signInT.onclick(signInT_right.getAttribute('nsbvalue'))}};NSB.MultiInput_init('mSignIn');NSB.addProperties(mSignIn);frmSignIn.style.display='none';},false);frmSignIn.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};NSB.addProperties(frmSignIn);var susername,spassword;signInT.onclick=function(choice){savethefunction_rvar="";if(TypeName(choice)=="object"){return savethefunction_rvar;}
switch(True){case((choice)=="Sign In"):susername=mSignIn.getValue(1);susername=Trim(susername);if(Len(susername)==0){NSB.MsgBox("Please specify a user name!");return;}
spassword=mSignIn.getValue(2);spassword=Trim(spassword);if(Len(susername)==0){NSB.MsgBox("Please specify a password!");return;}
var sqlList;sqlList=[];query="SELECT * FROM Users WHERE UserName = '"+susername+"' and Password = '"+spassword+"';";sqlList[0]=[query,CheckUser,CheckUserError];Sql(dbObj,sqlList);}
return savethefunction_rvar;}
function CheckUser(transaction,results){savethefunction_rvar="";var row,i,sPasswordExpiry,sGroupName,sFullName,sEmailAddress;var sActive,sPermissions,tusers;tusers=results.rows.length-1;if(_jsCint(tusers)==-1){NSB.MsgBox("You have entered incorrect sign in details, please try again!");return;}else if(_jsCint(tusers)==0){row=results.rows.item(0);sPasswordExpiry=row["PasswordExpiry"];sGroupName=row["GroupName"];sFullName=row["FullName"];sEmailAddress=row["EmailAddress"];sActive=row["Active"];sPermissions=row["Permissions"];if(sActive=="N"){NSB.MsgBox("Your account is no longer active. Please contact the System Administrator!");return;}
localStorage.setItem("email",sEmailAddress);var sToday;sToday=ToDay1();var sThen;sThen=DbDateOut1(sPasswordExpiry);if(_jsCint(sThen)<_jsCint(sToday)){}
ChangeForm(frmMainMenu);}
return savethefunction_rvar;}
function CheckUserError(transaction,results){savethefunction_rvar="";NSB.MsgBox("SQL Error: "+results.code+": "+results.message);return savethefunction_rvar;}
frmSignIn.onshow=function(){savethefunction_rvar="";mSignIn.setValue(1,"");mSignIn.setValue(2,"");return savethefunction_rvar;}
window.addEventListener('load',function(){frmRestore.style.display='block';NSB.addProperties(restoreT);NSB.addDisableProperty(restoreT);if(typeof(restoreT.onclick)=='function'){if(typeof(restoreT_left)!='undefined')restoreT_left.onclick=function(){restoreT.onclick(restoreT_left.getAttribute('nsbvalue'))};if(typeof(restoreT_right)!='undefined')restoreT_right.onclick=function(){restoreT.onclick(restoreT_right.getAttribute('nsbvalue'))}};txtRestore.ontouchmove=function(e){e.stopPropagation()};NSB.addProperties(txtRestore);frmRestore.style.display='none';},false);frmRestore.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};NSB.addProperties(frmRestore);restoreT.onclick=function(choice){savethefunction_rvar="";if(TypeName(choice)=="object"){return savethefunction_rvar;}
switch(True){case((choice)=="Home"):ChangeForm(frmMainMenu);break;case((choice)=="Restore"):dbJSON=txtRestore.value;dbJSON=Trim(dbJSON);if(Len(dbJSON)==0){NSB.MsgBox("Please replace the text with the copied text from the 'Backup' E-Mail!");return;}
NSB.ShowProgress("Working on it...");dbImport=JSON.parse(dbJSON);SQLImport(dbImport,dbObj,restoreComplete);}
return savethefunction_rvar;}
function restoreComplete(){savethefunction_rvar="";NSB.ShowProgress(False);return savethefunction_rvar;}
frmRestore.onshow=function(){savethefunction_rvar="";txtRestore.Left=10;txtRestore.Top=42;txtRestore.Height=frmRestore.Height-restoreT.Height-10;txtRestore.Width=frmRestore.Width-10;txtRestore.value=localStorage.getItem("backup");return savethefunction_rvar;}
window.addEventListener('load',function(){frmSignIn.style.display='block';Main();if(typeof(frmSignIn.onshow)=='function')frmSignIn.onshow();},false);var NSBCurrentForm=frmSignIn;

frmProject.innerHTML=[  NSB.HeaderBar_jqm("projectT", "SAFIRI Mobile Project.Show > Project", "Back", "arrow-l", "Save", "check", " data-theme=b style='' class=' ' "),
  NSB.MultiInput("mProjectL", 14, "smallfield", "", "ID,Wbs,***Name***,Start Date,Finish Date,Budget,Expenditure,% Progress,% Planned,Category,Sponsor,Component,Project Stage,Resources", "text,text,text,text,text,text,text,text,text,text,text,text,text,text", "", " style=  ", false),
  NSB.MultiInput("mProject", 14, "bigfield", "ID,Wbs,Name,Start Date,Finish Date,Budget,Expenditure,% Progress,% Planned,Category,Sponsor,Component,Project Stage,Resources", "", "text,text,text,text,text,text,text,text,text,text,text,text,text,text", "", " style=  ", false),
  NSB.ComboBox("cboProjectCategory", "", "1,2", "", ""),
  NSB.ComboBox("cboProjectComponent", "", "1,2", "", ""),
  NSB.ComboBox("cboProjectStage", "", "1,2", "", ""),
  ].join('');

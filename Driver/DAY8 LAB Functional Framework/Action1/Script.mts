mrowcount=datatable.GetSheet("Action1").GetRowCount

For i=1 To mrowcount  Step 1
	datatable.SetCurrentRow(i)
	If datatable("ModuleExe","Action1")="Y" then
		
		Modid=datatable("ModuleID","Action1")
'		msgbox Modid
		tcrowcount=datatable.GetSheet("Action2").GetRowCount
		
	For j = 1 To tcrowcount Step 1
		
		datatable.SetCurrentRow(j)
		
		If Modid=Datatable("ModuleID","Action2") and Datatable("TestCaseExe","action2")="Y" Then
			testcaseid=datatable("TestCaseId","Action2")
'			msgbox testcaseid
			
			tsrowcount=datatable.Getsheet("Action3").GetRowCount
			
			For k=1 To tsrowcount Step 1
			datatable.SetCurrentRow(k)
			
			If testcaseid=datatable("TestCaseId","Action3")Then
				
				keyword=datatable("Keyword","Action3")
'               msgbox keyword

	            
	            
	            Select Case keyword
	            	
	            	Case "lh"
	            	Call launch()
	            	Case "ln"
	            	Call login("abcd@gmail.com","abcd@6155")
	            	Case "ce"
	            	call close()
	            	Case "nr"
	            	Call neworder()
	            	
	            Case "lnd"
	            For l=1  To drowcount Step 1
	            	datatable.SetCurrentRow(1)
	            	agentname=datatable("username","Action4")
	            	password=datatable("password","Action4")
	            	Call launch()
	            	Call login(agentname,password)
	            	Call close()
	            Next
	            	
	            End Select
			  End If
	       Next	

	  End If
   Next
  End If
Next


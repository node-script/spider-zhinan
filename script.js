
    <script>
        
    function download(fileid, itemid, deptid, typeid, fileurl, fileflag) {
		var efileid = encodeURIComponent(fileid);
		 window.open("http://zwfw.tj.gov.cn/fileService/downloadFile.jspx?fileid="+fileid);
		 return ;
		if (typeid == 1) {
			//其他系统提供下载URL，供网上办事大厅V3调用
			if (fileurl != '' && fileurl != null) {
				var url = fileurl + "?deptId=" + deptid + "&itemId=" + itemid
						+ "&fileId=" + efileid;
			} else {
				var url = "http://zwfw.tj.gov.cn/downloadFile.jspx?fileId=" + efileid + "&itemId="
						+ itemid + "&deptId=" + deptid;
			}
		} else if (typeid == 2) {
			if (fileflag != null && fileflag != "") {
				var url = "http://zwfw.tj.gov.cn/servlet/downloadFileServlet?fileNo=" + efileid
						+ "&fileflag=" + fileflag;
			} else {
				var url = "http://zwfw.tj.gov.cn/servlet/downloadFileServlet?fileNo=" + efileid;
			}
		} else if (typeid == 3) {
			var url = "http://zwfw.tj.gov.cn/servlet/downloadFileServlet?fileNo=" + efileid;
		}
		if (fileflag != null && fileflag != "") {
			window.open(url,
							'new',
							'toolbar=no,menubar=no,scrollbars=yes,resizable=yes,location=no,status=no,titlebar=no');
		} else {
			window.location.href = url;
		}
	}
</script>
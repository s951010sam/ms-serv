/*
	NPC Name: 		Spinel
	Map(s): 		Victoria Road : Henesys (100000000), Victoria Road : Ellinia (101000000), Victoria Road : Perion (102000000), Victoria Road : Kerning City (103000000), Victoria Road : Lith Harbor (104000000), Orbis : Orbis (200000000), Ludibrium : Ludibrium (220000000), Leafre : Leafre (240000000), Zipangu : Mushroom Shrine (800000000)
	Description: 		World Tour Guide
*/
var status = -1;
var cost, sel;
var togo1, togo2, togo3, togo4, togo5, togo6, togo7, togo8, togo9, togo10;
var map;

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function start() {
	switch (cm.getMapId()) {
		case 200000000: //天空之城1
		case 211000000: //冰原雪域2
		case 250000000: //桃花仙境3
		case 260000000: //沙漠4
		case 220000000: //玩具城5
		case 240000000:	//神木村6
		case 140000000: //瑞恩7
		case 740000000: //西門町8
		case 701000000: //上海灘9
		case 500000000: //泰國10
		case 800000000: //日本神社11
			map = cm.getSavedLoccation("Worldtour");
			cm.sendSimple("想到處旅遊嗎?找我就對了，哈哈!!想去哪呢?還是要回去原來的地方? \n\r #b#L0#我想去~#l \n\r #L1#我旅行完了,我要回去#m"+map+"##l");
			break;
	}
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function action(mode, type, selection) {
	if (mode == -1) { 
		cm.dispose();
	}else {
		if((status <= 2 && mode == 0)) || (status == 4 && mode == 1)) {
			cm.dispose;
			return;
		}
	}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	if (mode == 1)
		status++;
	else
		status--;
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	if (status == 0) {
		if (selection == 0) {
			switch (cm.getMapId()) {
				case 200000000:
					togo1 = 211000000;
					togo2 = 250000000;
					togo3 = 260000000;
					togo4 = 220000000;
					togo5 = 240000000;
					togo6 = 140000000;
					togo7 = 740000000;
					togo8 = 701000000;
					togo9 = 500000000;
					togo10 = 800000000;
				case 211000000:
					togo1 = 200000000;
					togo2 = 250000000;
					togo3 = 260000000;
					togo4 = 220000000;
					togo5 = 240000000;
					togo6 = 140000000;
					togo7 = 740000000;
					togo8 = 701000000;
					togo9 = 500000000;
					togo10 = 800000000;
				case 250000000:
					togo1 = 211000000;
					togo2 = 200000000;
					togo3 = 260000000;
					togo4 = 220000000;
					togo5 = 240000000;
					togo6 = 140000000;
					togo7 = 740000000;
					togo8 = 701000000;
					togo9 = 500000000;
					togo10 = 800000000;
				case 260000000:
					togo1 = 211000000;
					togo2 = 250000000;
					togo3 = 200000000;
					togo4 = 220000000;
					togo5 = 240000000;
					togo6 = 140000000;
					togo7 = 740000000;
					togo8 = 701000000;
					togo9 = 500000000;
					togo10 = 800000000;
				case 220000000:
					togo1 = 211000000;
					togo2 = 250000000;
					togo3 = 260000000;
					togo4 = 200000000;
					togo5 = 240000000;
					togo6 = 140000000;
					togo7 = 740000000;
					togo8 = 701000000;
					togo9 = 500000000;
					togo10 = 800000000;
				case 240000000:
					togo1 = 211000000;
					togo2 = 250000000;
					togo3 = 260000000;
					togo4 = 220000000;
					togo5 = 200000000;
					togo6 = 140000000;
					togo7 = 740000000;
					togo8 = 701000000;
					togo9 = 500000000;
					togo10 = 800000000;
				case 140000000:
					togo1 = 211000000;
					togo2 = 250000000;
					togo3 = 260000000;
					togo4 = 220000000;
					togo5 = 240000000;
					togo6 = 200000000;
					togo7 = 740000000;
					togo8 = 701000000;
					togo9 = 500000000;
					togo10 = 800000000;
				case 740000000:
					togo1 = 211000000;
					togo2 = 250000000;
					togo3 = 260000000;
					togo4 = 220000000;
					togo5 = 240000000;
					togo6 = 140000000;
					togo7 = 200000000;
					togo8 = 701000000;
					togo9 = 500000000;
					togo10 = 800000000;
				case 701000000:
					togo1 = 211000000;
					togo2 = 250000000;
					togo3 = 260000000;
					togo4 = 220000000;
					togo5 = 240000000;
					togo6 = 140000000;
					togo7 = 740000000;
					togo8 = 200000000;
					togo9 = 500000000;
					togo10 = 800000000;
				case 500000000:
					togo1 = 211000000;
					togo2 = 250000000;
					togo3 = 260000000;
					togo4 = 220000000;
					togo5 = 240000000;
					togo6 = 140000000;
					togo7 = 740000000;
					togo8 = 701000000;
					togo9 = 200000000;
					togo10 = 800000000;
				case 800000000:
					togo1 = 211000000;
					togo2 = 250000000;
					togo3 = 260000000;
					togo4 = 220000000;
					togo5 = 240000000;
					togo6 = 140000000;
					togo7 = 740000000;
					togo8 = 701000000;
					togo9 = 500000000;
					togo10 = 200000000;
				break;
			}
			cm.sendSimple("想去哪呢? \n\r #b#L0##m"+togo1+"# (3,000 楓幣)#l \n\r #b#L1##m"+togo2+"# (3,000 楓幣)#l \n\r #b#L2##m"+togo3+"# (3,000 楓幣)#l \n\r #b#L3##m"+togo4+"# (3,000 楓幣)#l \n\r #b#L4##m"+togo5+"# (3,000 楓幣)#l \n\r #b#L5##m"+togo6+"# (3,000 楓幣)#l \n\r #b#L6##m"+togo7+"# (3,000 楓幣)#l \n\r #b#L7##m"+togo8+"# (3,000 楓幣)#l \n\r #b#L8##m"+togo9+"# (3,000 楓幣)#l \n\r #b#L9##m"+togo10+"# (3,000 楓幣)#l");
			}else if (selection == 1){
				cm.warp(map);
				cm.clearSavedLocation("Worldtour");
				cm.dispose();
			}
		}else if (status == 1) {
			sel = selection;
			if (sel == 0 ) {
				cm.sendNext("你確定要前往 #b#m"+togo1+"##k?  到那邊需要 #b3,000 楓幣#k. 確定現在要去嗎?");
			}else if (sel == 1 ){
				cm.sendNext("你確定要前往 #b#m"+togo2+"##k?  到那邊需要 #b3,000 楓幣#k. 確定現在要去嗎?");
			}else if (sel == 2 ){
				cm.sendNext("你確定要前往 #b#m"+togo3+"##k?  到那邊需要 #b3,000 楓幣#k. 確定現在要去嗎?");
			}else if (sel == 3 ){
				cm.sendNext("你確定要前往 #b#m"+togo4+"##k?  到那邊需要 #b3,000 楓幣#k. 確定現在要去嗎?");
			}else if (sel == 4 ){
				cm.sendNext("你確定要前往 #b#m"+togo5+"##k?  到那邊需要 #b3,000 楓幣#k. 確定現在要去嗎?");
			}else if (sel == 5 ){
				cm.sendNext("你確定要前往 #b#m"+togo6+"##k?  到那邊需要 #b3,000 楓幣#k. 確定現在要去嗎?");
			}else if (sel == 6 ){
				cm.sendNext("你確定要前往 #b#m"+togo7+"##k?  到那邊需要 #b3,000 楓幣#k. 確定現在要去嗎?");
			}else if (sel == 7 ){
				cm.sendNext("你確定要前往 #b#m"+togo8+"##k?  到那邊需要 #b3,000 楓幣#k. 確定現在要去嗎?");
			}else if (sel == 8 ){
				cm.sendNext("你確定要前往 #b#m"+togo9+"##k?  到那邊需要 #b3,000 楓幣#k. 確定現在要去嗎?");
			}else if (sel == 9 ){
				cm.sendNext("你確定要前往 #b#m"+togo10+"##k?  到那邊需要 #b3,000 楓幣#k. 確定現在要去嗎?");
			}
		}else if (status == 2) {
			if (sel == 0 ) {
				cm.warp(togo1);
			}else if (sel == 1) {
		    	cm.warp(togo2);
		    }else if (sel == 2) {
		    	cm.warp(togo3);
		    }else if (sel == 3) {
		    	cm.warp(togo4);
		    }else if (sel == 4) {
		    	cm.warp(togo5);
		    }else if (sel == 5) {
		    	cm.warp(togo6);
		    }else if (sel == 6) {
		    	cm.warp(togo7);
		    }else if (sel == 7) {
		    	cm.warp(togo8);
		    }else if (sel == 8) {
		    	cm.warp(togo9);
		    }else if (sel == 9) {
		    	cm.warp(togo10);
		    }
		    cm.dispose();
		}
	}
}
				
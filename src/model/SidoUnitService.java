package model;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

public class SidoUnitService {
	private static SidoUnitService instance = new SidoUnitService();
	private SidoUnitService() {}
	public static SidoUnitService getInstance() {
		return instance;
	}
	
	public static void getIndex(String year) throws IOException, ParseException{
		ArrayList<String> gu = new ArrayList<>(Arrays.asList("전국","서울특별시","부산광역시","대구광역시","인천광역시","광주광역시","대전광역시","울산광역시","세종특별자치시","경기도","강원도","충청북도","충청남도","전라북도","전라남도","경상북도","경상남도","제주특별자치도"));
		ArrayList<String> lev = new ArrayList<>(Arrays.asList("Very Satisfied","Moderately Satisfied","Neither satisfied nor dissatisfied","Moderately Dissatisfied","Very Dissatisfied"));
		BufferedReader br = null;
		JSONParser parser = new JSONParser();
		
		JSONArray obj = null;
		
		HashMap happyIndex = new HashMap<>();
		HashMap happyIndexMale = new HashMap<>();
		HashMap happyIndexFemale = new HashMap<>();
		for (String g : gu) {
			happyIndex.put(g, 0);
			happyIndexMale.put(g, 0);
			happyIndexFemale.put(g, 0);
		}
		
		int start = 1;
		int end = 999;
//		int end = start + 998;
		URL url = new URL("http://kosis.kr/openapi/statisticsData.do?method=getList&apiKey=ODA3YTJlNDdkMzhkODJkMzdhMDU0NjJhYTFmNzE4MjI=&format=json&jsonVD=Y&userStatsId=sheepoo1/101/INH_1SSSP020R/2/1/20190909160618&prdSe=Y&newEstPrdCnt=1");
		
		HttpURLConnection urlconnection = (HttpURLConnection) url.openConnection();
		urlconnection.setRequestMethod("GET");
		br = new BufferedReader(new InputStreamReader(urlconnection.getInputStream(), "UTF-8"));

		obj = (JSONArray) ((JSONArray) parser.parse(br.readLine()));
		long dataNum = (long) obj.size();
		
		System.out.println(obj.get(1));
		for (int i = 1; i < dataNum; i++) {
			
			JSONObject j = (JSONObject) obj.get(i);
			if (j.get("PRD_DE").equals(year)){
				if(j.get("C2_NM_ENG").equals("Total")) {
					happyIndex.put(j.get("C1_NM"), value)
				}else if(j.get("C2_NM_ENG").equals("Male")) {
					
				}else if(j.get("C2_NM_ENG").equals("Female")) {
					
				}
			}
		}
//		return happyIndex;
	}
	public static void main(String[] args) {
		try {
			getIndex("2017");
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}

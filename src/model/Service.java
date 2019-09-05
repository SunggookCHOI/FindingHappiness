package model;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;


public class Service {
	
	private static Service instance = new Service();
	private Service() {}
	public static Service getInstance() {
		return instance;
	}
	
	public static HashMap getIndex(String year) throws IOException, ParseException{
		ArrayList<String> gu = new ArrayList<>(Arrays.asList("종로구","중구","용산구","성동구","광진구","동대문구","성북구","강북구","도봉구","노원구","은평구","서대문구","마포구","양천구","강서구","구로구","금천구","영등포구","동작구","관악구","서초구","강남구","송파구","강동구","중랑구"));
		
		BufferedReader br = null;
		JSONParser parser = new JSONParser();
		
		JSONObject obj = null;
		
		HashMap happyIndex = new HashMap<>();
		
		int start = 1;
		int end = 999;
//		int end = start + 998;
		URL url = new URL("http://openapi.seoul.go.kr:8088/74576a536f7368653330436847626c/json/octastatapi26/"+start+"/"+end+"/");
		
		HttpURLConnection urlconnection = (HttpURLConnection) url.openConnection();
		urlconnection.setRequestMethod("GET");
		br = new BufferedReader(new InputStreamReader(urlconnection.getInputStream(), "UTF-8"));

		obj = (JSONObject) ((JSONObject) parser.parse(br.readLine())).get("octastatapi26");
		long dataNum = (long) obj.get("list_total_count");
		JSONArray jsonData = (JSONArray) obj.get("row");

		for (int i = 0; i < dataNum; i++) {
			
			JSONObject j = (JSONObject) jsonData.get(i);
			if (j.get("GIGAN").equals(year) && gu.contains((String) j.get("DAEBULLYU"))) {
				happyIndex.put(j.get("DAEBULLYU"), Double.parseDouble((String) j.get("JONGHAP_HAENGBOKJISU")));
			}
		}
		return happyIndex;
	}
	
	public static HashMap<String, Double> getGreen(String year) throws IOException, ParseException{
		
		ArrayList<String> gu = new ArrayList<>(Arrays.asList("종로구","중구","용산구","성동구","광진구","동대문구","성북구","강북구","도봉구","노원구","은평구","서대문구","마포구","양천구","강서구","구로구","금천구","영등포구","동작구","관악구","서초구","강남구","송파구","강동구","중랑구"));
		
		BufferedReader br = null;
		JSONParser parser = new JSONParser();
		
		JSONObject obj = null;
		
		HashMap green = new HashMap<>();
		HashMap area = new HashMap<>();
		
		int start = 1;
		int end = 999;
//		int end = start + 998;
		URL url = new URL("http://openapi.seoul.go.kr:8088/74576a536f7368653330436847626c/json/octastatapi368/"+start+"/"+end+"/");
		
		HttpURLConnection urlconnection = (HttpURLConnection) url.openConnection();
		urlconnection.setRequestMethod("GET");
		br = new BufferedReader(new InputStreamReader(urlconnection.getInputStream(), "UTF-8"));

		obj = (JSONObject) ((JSONObject) parser.parse(br.readLine())).get("octastatapi368");
		long dataNum = (long) obj.get("list_total_count");
		JSONArray jsonData = (JSONArray) obj.get("row");
//		dataNum = 3000;
//		JSONArray obj3 = (JSONArray) obj2.get("row");
		
//		ArrayList<String> keys = new ArrayList<>(((JSONObject) jsonData.get(0)).keySet());
		for (int i = 0; i < dataNum; i++) {
			
			JSONObject j = (JSONObject) jsonData.get(i);
			if (j.get("GIGAN").equals(year) && gu.contains((String) j.get("JACHIGU"))) {
				green.put(j.get("JACHIGU"), Integer.parseInt((String) j.get("MYEONJEOK_1")));
			}
		}
		
		url = new URL("http://openapi.seoul.go.kr:8088/74576a536f7368653330436847626c/json/octastatapi412/" + start
				+ "/" + end + "/");

		urlconnection = (HttpURLConnection) url.openConnection();
		urlconnection.setRequestMethod("GET");
		br = new BufferedReader(new InputStreamReader(urlconnection.getInputStream(), "UTF-8"));

		obj = (JSONObject) ((JSONObject) parser.parse(br.readLine())).get("octastatapi412");
		long dataNum2 = (long) obj.get("list_total_count");
		JSONArray jsonData2 = (JSONArray) obj.get("row");
		for (int i = 0; i < dataNum2; i++) {

			JSONObject j = (JSONObject) jsonData2.get(i);
			if (gu.contains((String) j.get("JACHIGU"))) {
				area.put(j.get("JACHIGU"), (int)(Double.parseDouble((String) j.get("MYEONJEOK"))*1000000));
			}
		}
		
		HashMap<String, Double> greenRatio = new HashMap();
		for (String jachigu : gu) {
			int jArea=(int)area.get(jachigu);
			int jGreen=(int)green.get(jachigu);
			greenRatio.put(jachigu,  (jGreen/(double)jArea)*100);
			
		}
		
		for(String k : greenRatio.keySet()) {
			System.out.println(k +" "+ greenRatio.get(k));
		}
		////////////////////
		StringBuilder builder = new StringBuilder();
		builder.append("[");
		for(String k : gu) {
			if (gu.indexOf(k)!=gu.size()-1) {
				builder.append("['"+k+"','"+greenRatio.get(k)+"'],");
			}else {
				builder.append("['"+k+"','"+greenRatio.get(k)+"']");
			}
		}
		builder.append("]");
		
		
		return greenRatio;
		
	}

	public static HashMap getYoung(String year) throws IOException, ParseException {
		ArrayList<String> gu = new ArrayList<>(
				Arrays.asList("종로구", "중구", "용산구", "성동구", "광진구", "동대문구", "성북구", "강북구", "도봉구", "노원구", "은평구", "서대문구",
						"마포구", "양천구", "강서구", "구로구", "금천구", "영등포구", "동작구", "관악구", "서초구", "강남구", "송파구", "강동구", "중랑구"));
		ArrayList<String> ageKeys = new ArrayList<>(
				Arrays.asList("N_04SE","N_59SE","N_1014SE","N_1519SE","N_2024SE","N_2529SE","N_3034SE","N_3539SE","N_4044SE","N_4549SE","N_5054SE","N_5559SE","N_6064SE","N_6569SE","N_7074SE","N_7579SE","N_8084SE","N_8589SE","N_9094SE","N_9599SE","N_100SE_ISANG"));

		BufferedReader br = null;
		JSONParser parser = new JSONParser();

		JSONObject obj = null;

		int[] all = new int[gu.size()];
		int[] young = new int[gu.size()];

		int start = 1;
		int end = 999;
//		int end = start + 998;
		URL url = new URL("http://openapi.seoul.go.kr:8088/74576a536f7368653330436847626c/json/octastatapi10718/" + start
				+ "/" + end + "/");

		HttpURLConnection urlconnection = (HttpURLConnection) url.openConnection();
		urlconnection.setRequestMethod("GET");
		br = new BufferedReader(new InputStreamReader(urlconnection.getInputStream(), "UTF-8"));

		obj = (JSONObject) ((JSONObject) parser.parse(br.readLine())).get("octastatapi10718");
		long dataNum = (long) obj.get("list_total_count");
		JSONArray jsonData = (JSONArray) obj.get("row");
//		dataNum = 3000;
//		JSONArray obj3 = (JSONArray) obj2.get("row");

//		ArrayList<String> keys = new ArrayList<>(((JSONObject) jsonData.get(0)).keySet());
		for (int i = 0; i < dataNum; i++) {

			JSONObject j = (JSONObject) jsonData.get(i);
			if (j.get("GIGAN").equals(year) && gu.contains((String) j.get("GUBUN_1")) && j.get("GUBUN_2").equals("계")) {
				int guIndex = gu.indexOf((String) j.get("GUBUN_1"));
				for (String k : ageKeys) {
					int index = ageKeys.indexOf(k);
					all[guIndex] += Integer.parseInt((String) j.get(k));
					if(index <=5) {
						young[guIndex] +=Integer.parseInt((String) j.get(k));
					}
				}
			}
		}
		HashMap<String, Double> youngRatio = new HashMap<>();
		for (String guName : gu) {
			youngRatio.put(guName, young[gu.indexOf(guName)]/(double)all[gu.indexOf(guName)]);
		}
		return youngRatio;
	}
	
	public static HashMap getBudget(String year) throws IOException, ParseException {
		HashMap<String, Integer> budget = new HashMap<>();
		
		ArrayList<String> gu = new ArrayList<>(
				Arrays.asList("종로구", "중구", "용산구", "성동구", "광진구", "동대문구", "성북구", "강북구", "도봉구", "노원구", "은평구", "서대문구",
						"마포구", "양천구", "강서구", "구로구", "금천구", "영등포구", "동작구", "관악구", "서초구", "강남구", "송파구", "강동구", "중랑구"));

		BufferedReader br = null;
		JSONParser parser = new JSONParser();

		JSONObject obj = null;

		int start = 1;
		int end = 999;
//		int end = start + 998;
		URL url = new URL("http://openapi.seoul.go.kr:8088/74576a536f7368653330436847626c/json/octastatapi10183/" + start
				+ "/" + end + "/");

		HttpURLConnection urlconnection = (HttpURLConnection) url.openConnection();
		urlconnection.setRequestMethod("GET");
		br = new BufferedReader(new InputStreamReader(urlconnection.getInputStream(), "UTF-8"));

		obj = (JSONObject) ((JSONObject) parser.parse(br.readLine())).get("octastatapi10183");
		long dataNum = (long) obj.get("list_total_count");
		JSONArray jsonData = (JSONArray) obj.get("row");
		for (int i = 0; i < dataNum; i++) {
			
			JSONObject j = (JSONObject) jsonData.get(i);
			System.out.println(j.get("GIGAN"));
			if (j.get("GIGAN").equals(year) && gu.contains((String) j.get("JACHIGU"))) {
				budget.put((String) j.get("JACHIGU"), Integer.parseInt((String) j.get("MUNHWA_MIT_GWANGWANG"))) ;
				
			}
		}
		return budget;
	}
	
	public static void main(String[] args) {
		try {
			getBudget("2017");
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}

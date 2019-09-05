package Controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.parser.ParseException;

import model.Service;

@WebServlet("/happiness.do")
public class Controller extends HttpServlet {
	ArrayList<String> gu = new ArrayList<>(Arrays.asList("종로구","중구","용산구","성동구","광진구","동대문구",
			"성북구","강북구","도봉구","노원구","은평구","서대문구","마포구","양천구","강서구","구로구","금천구","영등포구",
			"동작구","관악구","서초구","강남구","송파구","강동구","중랑구"));
	
	private static Service service = Service.getInstance();
	
	public Controller() {
		super();
	}
	protected void service(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.addHeader("Access-Control-Allow-Origin", "*");
		response.addHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE, HEAD");
		response.addHeader("Access-Control-Allow-Headers",
				"X-PINGOTHER, Origin, X-Requested-With, Content-Type, Accept");
		response.addHeader("Access-Control-Max-Age", "1728000");
		request.setCharacterEncoding("utf-8");
		//command pattern
		String command = request.getParameter("command");
		System.out.println(command);
		try{
			if(command.equals("getGreenRatio")){
				getGreen(request, response);
			}else if(command.equals("getYoungRatio")){
				getYoung(request, response);
			}else if(command.equals("getBudget")){
				getBudget(request, response);
			}else if(command.equals("getSalesAmount")){
			}else if(command.equals("activistInsert")){
			}else if(command.equals("activistUpdateReq")){
			}else if(command.equals("activistUpdate")){
			}else if(command.equals("activistDelete")){
			}
		}catch(Exception s){
			request.setAttribute("errorMsg", s.getMessage());
			request.getRequestDispatcher("showError.jsp").forward(request, response);
			s.printStackTrace();
		}
	}
	public void getGreen(HttpServletRequest request, HttpServletResponse response) {
		HashMap greenRatio = null;
		HashMap happyIndex = null;
		try {
			greenRatio = service.getGreen("2017");
			happyIndex = service.getIndex("2017");
		} catch (IOException e) {
			e.printStackTrace();
		} catch (ParseException e) {
			e.printStackTrace();
		}
		
		StringBuilder builder = new StringBuilder();
		builder.append("[");
		for(String k : gu) {
			if (gu.indexOf(k)!=gu.size()-1) {
				builder.append("['"+greenRatio.get(k)+"','"+happyIndex.get(k)+"','"+k+"'],");
			}else {
				builder.append("['"+greenRatio.get(k)+"','"+happyIndex.get(k)+"','"+k+"']");
			}
		}
		builder.append("]");
		
		request.setAttribute("green", builder.toString());
		try {
			request.getRequestDispatcher("green.jsp").forward(request, response);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
	public void getYoung(HttpServletRequest request, HttpServletResponse response) {
		HashMap youngRatio = null;
		HashMap happyIndex = null;
		try {
			youngRatio = service.getYoung("2017");
			happyIndex = service.getIndex("2017");
		} catch (IOException e) {
			e.printStackTrace();
		} catch (ParseException e) {
			e.printStackTrace();
		}
		
		StringBuilder builder = new StringBuilder();
		builder.append("[");
		for(String k : gu) {
			if (gu.indexOf(k)!=gu.size()-1) {
				builder.append("['"+youngRatio.get(k)+"','"+happyIndex.get(k)+"','"+k+"'],");
			}else {
				builder.append("['"+youngRatio.get(k)+"','"+happyIndex.get(k)+"','"+k+"']");
			}
		}
		builder.append("]");
		
		request.setAttribute("young", builder.toString());
		try {
			request.getRequestDispatcher("young.jsp").forward(request, response);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
	public void getBudget(HttpServletRequest request, HttpServletResponse response) {
		HashMap budget = null;
		HashMap happyIndex = null;
		try {
			budget = service.getBudget("2017");
			happyIndex = service.getIndex("2017");
		} catch (IOException e) {
			e.printStackTrace();
		} catch (ParseException e) {
			e.printStackTrace();
		}
		
		StringBuilder builder = new StringBuilder();
		builder.append("[");
		for(String k : gu) {
			if (gu.indexOf(k)!=gu.size()-1) {
				builder.append("['"+budget.get(k)+"','"+happyIndex.get(k)+"','"+k+"'],");
			}else {
				builder.append("['"+budget.get(k)+"','"+happyIndex.get(k)+"','"+k+"']");
			}
		}
		builder.append("]");
		
		request.setAttribute("young", builder.toString());
		try {
			request.getRequestDispatcher("young.jsp").forward(request, response);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}

}

package com.bk8.servlet.rest.jersey.server;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.bk8.servlet.data.model.Student;
import com.bk8.googleAPI.googleConnect;

@Path("/student")
public class RestServer {

	@GET
	@Path("/get")
	@Produces(MediaType.APPLICATION_JSON)
	public Student getStudentRecord(){
		Student student = new Student();
		student.setFirstName("Elizabeth");
		student.setLastName("Hayden");
		student.setSchool("Little Flower");
		student.setStandard("One");
		student.setRollNumber(1113);
		return student;
	}
	
	@GET
	@Path("/getMap")
	@Produces(MediaType.APPLICATION_JSON)
	public googleConnect getmap(){
		googleConnect GC = new googleConnect();
		GC.setMap("www.blablabla.com/rest/okddwannawuncuaw/");
		return GC;
	}
	
	@POST
	@Path("/post")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response postStudentRecord(Student student){
		String result = "Record entered: "+ student;
		return Response.status(201).entity(result).build();
	}
}

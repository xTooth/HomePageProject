/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package HomePage;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 *
 * @author Toothy
 */
@Controller
public class HomePageController {
    
    @GetMapping("/")
    public String index(){
        return "index";
    }
    
    @GetMapping("/me")
    public String me(){
        return "me";
    }
    
    @GetMapping("/demos")
    public String demos(){
        return "demos";
    }
    @GetMapping("/cv")
    public String cv(){
        return "cv";
    }
    @GetMapping("/skills")
    public String skills(){
        return "skills";
    }
    @GetMapping("/tut")
    public String tut(){
        return "tut";
    }
}

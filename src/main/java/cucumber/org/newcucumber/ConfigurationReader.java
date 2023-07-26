package cucumber.org.newcucumber;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class ConfigurationReader {
public Properties p;
public ConfigurationReader() throws IOException {
	File f = new File ("C:\\Users\\Shahul\\eclipse-workspace\\org.newcucumber\\Propertyfile\\nykaa.properties");
	FileInputStream fis = new FileInputStream(f);
	p=new Properties();
	p.load(fis);
}

public String geturl() {
	String url=p.getProperty("url");
	return url;
}
}

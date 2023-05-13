// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract Portfolio{
 
  struct Project{
      uint id;
      string name;
      string description;
      string image;
      string githubLink;
  }

  struct Education{
      uint id;
      string date;
      string degree;
      string knowledgeAcquired;
      string instutionName;
  }
  //check expreinece code with your solution
  struct Experience{
      uint id;
      string date;
      string post;
      string knowledgeAcquired;
      string compamyName;
  }
  Project[3] public projects;
  Education[3] public educationDetails;
  Experience[3] public experienceDetails;

  string public imageLink="Add your cid";
  string public description="over 6 months of practical experience with a good knowledge in blockchain development.i help web3 community by contributing in the web3 space.";
  string public resumeLink="Add your cid";
  uint projectCount;
  uint educationCount;
  uint experienceCount;
  address public manager;

  constructor(){
      manager=msg.sender;
  }

  modifier onlyManager(){
      require(manager==msg.sender,"You are not the manager");
      _;
  }
  
  //Project
  function insertProject(string calldata _name,string calldata _description,string calldata _image,string calldata _githubLink) external{
      require(projectCount<3,"Only 3 projects allowed");
      projects[projectCount] = Project(projectCount,_name,_description,_image,_githubLink);
      projectCount++;
  }

  function changeProject(string calldata _name,string calldata _description,string calldata _image,string calldata _githubLink,uint _projectCount) external{
       require(_projectCount>=0 && _projectCount<3,"Only 3 projects allowed");
      projects[projectCount] = Project(_projectCount,_name,_description,_image,_githubLink);
  }
    function allProjects() external view returns(Project[3] memory){
        return projects;
    }

//Education
   function insertEducation(string calldata _date,string calldata _degree,string calldata _knowledgeAcquired,string calldata _instutionName) external  onlyManager{
     require(educationCount<3,"Only 3 education details allowed");
     educationDetails[educationCount]=Education(educationCount,_date,_degree,_knowledgeAcquired,_instutionName);
     educationCount++;
    }

  function changeEducation(string calldata _date,string calldata _degree,string calldata _knowledgeAcquired,string calldata _instutionName,uint _educationDetailCount) external onlyManager{
      require(_educationDetailCount>=0 && _educationDetailCount<3,"Invalid educationCount");
      educationDetails[_educationDetailCount]=Education(_educationDetailCount,_date,_degree,_knowledgeAcquired,_instutionName);
  }

    function allEductationDetails() external view returns(Education[3] memory){
      return educationDetails;
  }
//Experience

    function insertExperience(string calldata _date,string calldata _post,string calldata _knowledgeAcquired,string calldata _companyName) external  onlyManager{
     require(experienceCount<3,"Only 3 education details allowed");
     experienceDetails[experienceCount]=Experience(experienceCount,_date,_post,_knowledgeAcquired,_companyName);
     experienceCount++;
    }

    function changeExperience(string calldata _date,string calldata _post,string calldata _knowledgeAcquired,string calldata _companyName,uint _experienceDetailCount) external  onlyManager{
     require(_experienceDetailCount>=0 && _experienceDetailCount<3,"Invalid experienceCount");
     experienceDetails[_experienceDetailCount]=Experience(_experienceDetailCount,_date,_post,_knowledgeAcquired,_companyName);
    }
    
    function allExperienceDetails() external view returns(Experience[3] memory){
      return experienceDetails;
    }
  function changeDescription(string calldata _description) external{
      description=_description;
  }

    function changeResumeLink(string calldata _resumeLink) external onlyManager{
      resumeLink=_resumeLink;
  }
     function changeImageLink(string calldata _imageLink) external onlyManager{
      imageLink=_imageLink;
  }

  function donate() public payable{
      payable(manager).transfer(msg.value);
  }

}

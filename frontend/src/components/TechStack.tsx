import React from 'react';

const TechStack = () => {
  const technologies = [
    { name: 'Jira', iconUrl: '/tech-icons/jira.svg' },
    { name: 'Angular', iconUrl: '/tech-icons/angular-icon.svg' },
    { name: 'AWS', iconUrl: '/tech-icons/aws.svg' },
    { name: 'C#', iconUrl: '/tech-icons/c-sharp.svg' },
    { name: 'Docker', iconUrl: '/tech-icons/docker-icon.svg' },
    { name: '.NET', iconUrl: '/tech-icons/dotnet.svg' },
    { name: 'FastAPI', iconUrl: '/tech-icons/fastapi-icon.svg' },
    { name: 'Flask', iconUrl: '/tech-icons/flask.svg' },
    { name: 'Google Cloud', iconUrl: '/tech-icons/google-cloud.svg' },
    { name: 'Hadoop', iconUrl: '/tech-icons/hadoop.svg' },
    { name: 'Heroku', iconUrl: '/tech-icons/heroku-icon.svg' },
    { name: 'JavaScript', iconUrl: '/tech-icons/javascript.svg' },
    { name: 'Jupyter', iconUrl: '/tech-icons/jupyter.svg' },
    { name: 'Kafka', iconUrl: '/tech-icons/kafka-icon.svg' },
    { name: 'Kubernetes', iconUrl: '/tech-icons/kubernetes.svg' },
    { name: 'Matplotlib', iconUrl: '/tech-icons/matplotlib-icon.svg' },
    { name: 'Microsoft Azure', iconUrl: '/tech-icons/microsoft-azure.svg' },
    { name: 'MongoDB', iconUrl: '/tech-icons/mongodb-icon.svg' },
    { name: 'MySQL', iconUrl: '/tech-icons/mysql.svg' },
    { name: 'Next.js', iconUrl: '/tech-icons/nextjs-icon.svg' },
    { name: 'Node.js', iconUrl: '/tech-icons/nodejs.svg' },
    { name: 'Oracle', iconUrl: '/tech-icons/oracle.svg' },
    { name: 'PostgreSQL', iconUrl: '/tech-icons/postgresql.svg' },
    { name: 'Python', iconUrl: '/tech-icons/python.svg' },
    { name: 'PyTorch', iconUrl: '/tech-icons/pytorch-icon.svg' },
    { name: 'React', iconUrl: '/tech-icons/react.svg' },
    { name: 'Seaborn', iconUrl: '/tech-icons/seaborn-icon.svg' },
    { name: 'TensorFlow', iconUrl: '/tech-icons/tensorflow.svg' },
    { name: 'TypeScript', iconUrl: '/tech-icons/typescript-icon.svg' },
    { name: 'WordPress', iconUrl: '/tech-icons/wordpress-icon.svg' },
    { name: 'GraphQL', iconUrl: '/tech-icons/graphql.svg' },
    { name: 'Scikit-learn', iconUrl: '/tech-icons/scikit-learn.svg' },


  ];

  return (
    <div className="w-full p-4"> 
      <div className="flex flex-wrap gap-4 justify-center items-center">
        {technologies.map((tech, index) => (
          <div 
            key={index}
            title={tech.name} // Add title for tooltip on hover
            className={`w-12 h-12 rounded-lg flex items-center justify-center p-1 shadow-md transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_5px_rgba(255,255,255,0.7)]`}
          >
            <img src={tech.iconUrl} alt={tech.name} className="w-full h-full object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;

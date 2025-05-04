"use client";

export default function AboutPage() {
    return (
        <div
            style={{
                padding: '40px',
                fontFamily: "'Poppins', Arial, sans-serif",
                backgroundColor: '#ffffff',
                color: '#333333',
                lineHeight: '1.8',
                textAlign: 'center',
                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
                borderRadius: '12px',
                maxWidth: '900px',
                margin: '60px auto',
                border: '1px solid #e0e0e0',
            }}
        >
            <h1
                style={{
                    fontSize: '2.8rem',
                    color: '#2E7D32',
                    marginBottom: '25px',
                    fontWeight: '600',
                }}
            >
                About Me
            </h1>
            <p
                style={{
                    fontSize: '1.3rem',
                    marginBottom: '25px',
                    color: '#555555',
                    textAlign: 'left',
                }}
            >
                My self <strong>Chethan M N</strong>
            </p>
            <ul
                style={{
                    fontSize: '1.3rem',
                    marginBottom: '25px',
                    color: '#555555',
                    textAlign: 'left',
                    listStyleType: 'disc',
                    paddingLeft: '40px',
                }}
            >
                <li>
                    Pursuing a major in Electronics and Communication Engineering with a minor in Computer Science at PES University.
                </li>
                <li>
                    Passionate about leveraging technology to create impactful solutions and drive innovation.
                </li>
                <li>
                    Strong foundation in engineering principles with a keen interest in software development.
                </li>
                <li>
                    Continuously exploring new tools and technologies to enhance my skill set.
                </li>
                <li>
                    Dedicated to crafting user-centric designs and innovative solutions.
                </li>
                <li>
                    Open to connecting and collaborating on exciting opportunities.
                </li>
            </ul>
        </div>
    );
}

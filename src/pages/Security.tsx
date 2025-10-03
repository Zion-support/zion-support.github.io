import React from "react"
;
const Security: React.FC = () => {
  return (
        <section className="min-h-[40vh]">
            <h1 className="text-3xl font-bold mb-4">Security</h1>
            <p className="text-gray-700 mb-4">We follow best practices for security, including encryption, least privilege, and continuous monitoring.</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li >Data encryption in transit and at rest</li>
                <li >Security reviews and audits</li>
                <li >Incident response procedures</li>
            </ul>
        </section>
    );
};

export default Security;

;
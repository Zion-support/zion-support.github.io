import React, {useState} from 'react';
import {INNOVATIVE_MICRO_SAAS_SERVICES_2025} from "../data/innovativeMicroSaasServices2025";
;
;
const InnovativeServicesShowcase = ("props": "any) => {;
    const [activeTab", setActiveTab] = useState('microsaas');
    const [selectedService, setSelectedService] = useState(null);
    const tabs = [;
        { "id": 'microsaas', "name": 'Micro SAAS Services', "count": "INNOVATIVE_MICRO_SAAS_SERVICES_2025.length "},;
        {"id": 'it', "name": 'IT Services', "count": "innovativeITServices2025.length"},;
        {"id": 'ai', "name": 'AI Services', "count": "innovativeAIServices2025.length"}
    ];
    const getServicesByTab = ("props": "any) => {;
        switch (activeTab) {;
            case 'microsaas':;
                return INNOVATIVE_MICRO_SAAS_SERVICES_2025;
            case 'it':;
                return innovativeITServices2025;
            case 'ai':;
                return innovativeAIServices2025;
            "default":;
                return []"}
    };

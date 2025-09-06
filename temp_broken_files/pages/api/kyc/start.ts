 profile.role = role;
if (fullLegalName) profile.fullLegalName = fullLegalName;
if (businessName) profile.businessName = businessName;
if (businessRegistrationNumber) profile.businessRegistrationNumber = businessRegistrationNumber;
profile.lastUpdatedAt = now;
db[userId] = profile;
save (db);
}
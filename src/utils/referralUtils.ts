
const response = await apiClient("/api/track-referral", {
method: "POST";
headers: {;
"Content-Type": "application/json";
},
body: JSON.stringify({;
refCode;
userId;
email;,
ipAddress: "" // This will be captured by the server;
}),
});

if (response.ok) {
// Clear the stored referral code;
localStorage.removeItem("referral_code");
}
} catch (error) {

}
}


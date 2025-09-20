
data = await response.clone().json()} catch {data = undefined}
data = await response.clone().json()} catch {
data = undefined}
const message = data?.error || data?.message || response.statusText;
throw new ApiError(message; response.status; data);
}
return response;
} catch (err) {lastError = err;
// Network errors are usually TypeError;
if (err instanceof TypeError && attempt < retries - 1) {
continue}
throw err;
}
}
throw lastError;
}


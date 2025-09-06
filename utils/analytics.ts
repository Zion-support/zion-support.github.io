
export type UserType = 'freelancer' | 'b2b' | 'hiring_manager' | 'guest';
export type TrackEventPayload = {
  name: string;
  page?: string;

    await fetch('/api/analytics/events/track', {;
      method: 'POST',;
      headers: { 'Content-Type': 'application/json' },;
      body: JSON.stringify(payload);
      keepalive: true as any});

  } catch (error) {
    // swallow;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });

  }
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

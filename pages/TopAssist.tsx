import React, { useState } from 'react';
import './TopAssist.css';

const API_BASE = 'https://v3.football.api-sports.io';
const TOP_ASSISTS_URL = `${API_BASE}/players/topassists`;


function TopAssist() {

    const [assist_player, setAssistPlayer] = useState<{name: string, season: string, assists: number, photo?: string} | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function handleGetRandom() {
        setLoading(true);
        setError(null);

        const key = import.meta.env.VITE_API_SPORTS_KEY;


        try {
            const league = 39;
            const season = 2024;
            const res = await fetch(`${TOP_ASSISTS_URL}?league=${league}&season=${season}`, {
                method: 'GET',
                headers: { 'x-apisports-key': key },
            });
            const data = await res.json();
            if (data.errors && Object.keys(data.errors).length) {
                setError(data.errors.requests || 'API error');
                setLoading(false);
                console.error(data.errors);
                return;


        }

        const response_list = data?.response ?? [];

        if (response_list.length === 0) {
            setError('No player with top assists found');
            setLoading(false);
            return
        }

        //  Extract a random player's information from the response list
        const result_random_player = response_list[Math.floor(Math.random() * response_list.length)];
        const player = result_random_player?.player;
        const stats = result_random_player?.statistics?.[0];

        // Filling the values of the assist_player state
        setAssistPlayer({
            name: player?.name?? '??',
            season: String(stats?.league?.season?? '??'),
            assists: stats?.goals?.assists?? 0,
            photo: player?.photo,
        });

        }

        catch (e) {
            setError(e instanceof Error ? e.message : 'Request failed');
        }

        setLoading(false);


    }
 

    return (
        <section className="top-assist-page">

            {/* Top Assist Card */}
            <div className="top-assist-card">
                <div className="top-assist-card-image">
                    {assist_player?.photo ? (
                        <img src={assist_player.photo} alt={assist_player.name}/>
                    ) : (
                        <div className="top-assist-card-image-placeholder" />
                    )}
                </div>
                <div className="top-score-card-info">
                    <p> Name: {assist_player?.name ?? '??'}</p>
                    <p> Season: {assist_player?.season ?? '??'}</p>
                    <p> Assists: {assist_player != null ? assist_player.assists : '??'}</p>
                </div>
            </div>

            {/* Top Assist Button */}
            <button
                type="button"
                className="top-assist-button"
                onClick={handleGetRandom}
                disabled={loading}
            >
                {loading ? 'Loading…' : 'Get a random top assist'}
            </button>

            {error && <p className="top-assist-error">{error}</p>}

           
            
        </section>
    )
}

export default TopAssist;
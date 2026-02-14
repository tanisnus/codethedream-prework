
import React, { useState } from 'react';
import './TopScore.css';

const API_BASE = 'https://v3.football.api-sports.io';
const TOP_SCORERS_URL = `${API_BASE}/players/topscorers`;

function TopScore() {
    const [scorer, setScorer] = useState<{ name: string; season: string; goals: number; photo?: string } | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function handleGetRandom() {
        setLoading(true);
        setError(null);
        const key = import.meta.env.VITE_API_SPORTS_KEY;
        
        try {
            const league = 39;
            const season = 2023;
            const res = await fetch(`${TOP_SCORERS_URL}?league=${league}&season=${season}`, {
                method: 'GET',
                headers: { 'x-apisports-key': key },
            });
            const data = await res.json();
            if (data.errors && Object.keys(data.errors).length) {
                setError(data.errors.requests || 'API error');
                setLoading(false);
                return;
            }
            const list = data?.response ?? [];
            if (list.length === 0) {
                setError('No top scorers found');
                setLoading(false);
                return;
            }
            const random = list[Math.floor(Math.random() * list.length)];
            const player = random?.player;
            const stats = random?.statistics?.[0];
            setScorer({
                name: player?.name ?? '??',
                season: String(stats?.league?.season ?? '??'),
                goals: stats?.goals?.total ?? 0,
                photo: player?.photo,
            });
        } catch (e) {
            setError(e instanceof Error ? e.message : 'Request failed');
        }
        setLoading(false);
    }

    return (
        <section className="top-score-page">

            {/* Top Score Card */}
            <div className="top-score-card">
                <div className="top-score-card-image">
                    {scorer?.photo ? (
                        <img src={scorer.photo} alt={scorer.name} />
                    ) : (
                        <div className="top-score-card-image-placeholder" />
                    )}
                </div>
                <div className="top-score-card-info">
                    <p>Name: {scorer?.name ?? '??'}</p>
                    <p>Season: {scorer?.season ?? '??'}</p>
                    <p>Goals: {scorer != null ? scorer.goals : '??'}</p>
                </div>
            </div>

            {/* Top Score Button */}
            <button
                type="button"
                className="top-score-button"
                onClick={handleGetRandom}
                disabled={loading}
            >
                {loading ? 'Loading…' : 'Get a random top scorer'}
            </button>

            {error && <p className="top-score-error">{error}</p>}

            
        </section>
    );
}

export default TopScore;

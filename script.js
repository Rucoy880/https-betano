body {
  margin: 0;
  background: #0a0015;
  color: #fff;
  font-family: Arial, sans-serif;
  overflow: hidden;
}

.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #ffd700;
  font-size: 1.8rem;
}

.progress-bar {
  width: 300px;
  height: 20px;
  background: #333;
  border-radius: 10px;
  margin: 20px auto;
  overflow: hidden;
}

.progress {
  width: 0%;
  height: 100%;
  background: linear-gradient(to right, #ff00aa, #00ffff);
  animation: load 5s linear forwards;
}

@keyframes load {
  to { width: 82%; }
}

.game {
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0,0,0,0.5);
  padding: 10px;
  border-bottom: 2px solid #ffd700;
}

.lobby {
  background: #00ff41;
  color: black;
  padding: 8px 15px;
  border-radius: 10px;
  font-weight: bold;
}

.tigre-arc {
  text-align: center;
  margin: 20px 0;
}

.tigre {
  width: 70%;
  max-width: 300px;
  animation: bounce 3s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

.reels {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 20px 0;
}

.reel {
  width: 100px;
  height: 100px;
  background: #111;
  border: 4px solid #ffd700;
  border-radius: 15px;
  font-size: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: spin 1s linear infinite paused;
  box-shadow: 0 0 15px #ffd700;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.info-bar {
  display: flex;
  justify-content: space-around;
  background: #000;
  padding: 10px;
  border-radius: 15px;
  margin: 15px 0;
}

.controls {
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  margin: 20px 0;
}

.btn {
  padding: 12px 25px;
  font-size: 1.2rem;
  border: none;
  border-radius: 15px;
  cursor: pointer;
}

.spin {
  background: #00ff41;
  color: black;
  font-weight: bold;
  box-shadow: 0 0 20px #00ff41;
}

.balance {
  text-align: center;
  font-size: 2.5rem;
  color: #00ff41;
  margin: 20px 0;
}

.mensagem {
  text-align: center;
  font-size: 1.8rem;
  color: #ffd700;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}

#confetti {
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
    }

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-cyber-dark">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-cyber-blue border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-cyber-blue font-display text-lg">Loading Experience...</p>
      </div>
    </div>
  )
}

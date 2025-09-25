export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-muted/10">
      <div className="text-center space-y-4">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-primary mx-auto"></div>
        <p className="text-lg text-muted-foreground animate-pulse">
          Loading blog posts...
        </p>
      </div>
    </div>
  )
}

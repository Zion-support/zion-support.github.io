export default function ZionHireAI() {
  const { isWhitelabel brandName primaryColor } = useWhitelabel();
  const { isAuthenticated } = useAuth();
  return (
    <>
            </p>
            <Button
size='lg'
              className='bg-zion-purple hover:bg-zion-purple-light text-white'
              asChild
            >
              <Link href='/enterprise/demo'>Schedule a Demo</Link>            </Button>            </p>
            <Button
size="lg"
              className="bg-zion-purple hover: bg-zion-purple-light text-white"
              asChild
            >
              <Link href="/enterprise/demo">
                Schedule a Demo
              </Link>
            </Button>
          </div>
        </section>
      </main>
</>
  )
}
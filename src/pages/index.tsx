import Content from './index.mdx'

export default function Page() {
  return (
    <>
      <Content />
      <div className="access-counter-wrapper">
        <table border={0} cellSpacing={0} cellPadding={0} className="access-counter">
          <tbody>
            <tr>
              <td align="center">
                <a href="http://www.rays-counter.com/">
                  <img src="http://www.rays-counter.com/d1298_f6_017/6841afa46c7e5/" alt="アクセスカウンター" />
                </a>
              </td>
            </tr>
            <tr>
              <td align="center" style={{ fontSize: 'xx-small' }}>
                <img src="http://www.rays-counter.com/images/counter_01.gif" />
                <img src="http://www.rays-counter.com/images/counter_02.gif" />
                <img src="http://www.rays-counter.com/images/counter_03.gif" />
                <img src="http://www.rays-counter.com/images/counter_04.gif" />
                <img src="http://www.rays-counter.com/images/counter_05.gif" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

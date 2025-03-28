import './404.scss';

const NoFound = () => {
  return (
    <div className={'_404'}>
      <div className="error">

        <div className="wrap">
          <div className="404">
    <pre><code>
	 <span className="green">&lt;!</span><span>DOCTYPE html</span><span className="green">&gt;</span><br/>
<span className="orange">&lt;html&gt;</span><br/>
    <span className="orange">&lt;style&gt;</span>
      {'* {'}
      <span className="green">everything</span>:<span className="blue">awesome</span>;
      {'}'}
      <span className="orange">&lt;/style&gt;</span><br/>
 <span className="orange">&lt;body&gt;</span><br/>
              ERROR 404!
				FILE NOT FOUND!
      <br/>
				<span className="comment">&lt;!--The file you are looking for,
					is not where you think it is.--&gt;
		</span><br />

<span className="orange">&nbsp;&lt;/body&gt;</span><br />
      <span className="orange">&lt;/html&gt;</span>

</code></pre>
          </div>
          <span className="info">
<br />



<br />

    </span>
        </div>
      </div>
    </div>

  );
};

export default NoFound;
